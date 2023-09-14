import { readFileSync } from "fs";
import { normalize } from "path";
import ts from "typescript";

export interface CompileOutput {
  output: string;
  map?: string;
  definitions?: string;
  definitionMap?: string;
}

export function compileSourceFile(
  input: ts.SourceFile,
  transpileOptions?: ts.TranspileOptions,
): CompileOutput {
  const inputFileName = transpileOptions?.fileName || "module.ts";
  const printer = ts.createPrinter();
  const output: CompileOutput = { output: "" };

  const compilerOptions = Object.assign(
    {},
    ts.getDefaultCompilerOptions(),
    transpileOptions?.compilerOptions,
  );

  // we need to print and reparse the sourcefile beccause the compilation API
  // relies on parse information
  const sourceFile = ts.createSourceFile(
    inputFileName,
    printer.printFile(input),
    // borrowed from TS source getEmitScriptTarget()
    compilerOptions.target ?? compilerOptions.module === ts.ModuleKind.Node16
      ? ts.ScriptTarget.ES2022
      : compilerOptions.module === ts.ModuleKind.NodeNext
      ? ts.ScriptTarget.ESNext
      : ts.ScriptTarget.ES3,
  );

  // transpileModule does not write anything to disk so there is no need to
  // verify that there are no conflicts between input and output paths.
  compilerOptions.suppressOutputPathCheck = true;

  // Filename can be non-ts file.
  compilerOptions.allowNonTsExtensions = true;

  // Create a compilerHost object to allow the compiler to read and write files
  const compilerHost = ts.createCompilerHost(compilerOptions);

  compilerHost.getSourceFile = (fileName, version) => {
    if (fileName === normalize(inputFileName)) {
      return sourceFile;
    }
    return ts.createSourceFile(
      fileName,
      readFileSync(fileName, "utf-8"),
      version,
    );
  };

  compilerHost.writeFile = (name, text) => {
    if (name.endsWith(".d.ts")) {
      output.definitions = text;
    } else if (name.endsWith(".js")) {
      output.output = text;
    } else if (name.endsWith(".d.ts.map")) {
      output.definitionMap = text;
    } else if (name.endsWith(".js.map")) {
      output.map = text;
    }
  };

  const program = ts.createProgram(
    [inputFileName],
    compilerOptions,
    compilerHost,
  );

  const result = program.emit(
    undefined,
    undefined,
    undefined,
    undefined,
    transpileOptions?.transformers,
  );

  const diagnostics = ts
    .getPreEmitDiagnostics(program)
    .concat(result.diagnostics);

  for (const diagnostic of diagnostics) {
    if (diagnostic.file) {
      const { line, character } = ts.getLineAndCharacterOfPosition(
        diagnostic.file,
        diagnostic.start ?? 0,
      );
      const message = ts.flattenDiagnosticMessageText(
        diagnostic.messageText,
        "\n",
      );
      console.error(
        `${diagnostic.file.fileName} (${line + 1},${
          character + 1
        }): ${message}`,
      );
    } else {
      console.error(
        ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"),
      );
    }
  }

  return output;
}
