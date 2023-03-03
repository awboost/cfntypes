import ts from 'typescript';

export function attachJsDocComment<TNode extends ts.Node>(
  node: TNode,
  text: string,
  see?: string,
  seeLinkText?: string,
): TNode {
  let comment = `*\n * ${text}\n *\n`;
  if (see) {
    let link = see;
    if (seeLinkText) {
      link += ' | ' + seeLinkText;
    }
    comment += ` * @see {@link ${link}}\n`;
  }
  comment += ` `;

  return ts.addSyntheticLeadingComment(
    node,
    ts.SyntaxKind.MultiLineCommentTrivia,
    comment,
    true,
  );
}

export function makeJsDocComment(
  text: string,
  see?: string,
  seeLinkText?: string,
): ts.JSDoc {
  if (see) {
    return ts.factory.createJSDocComment(text + '\n', [
      ts.factory.createJSDocSeeTag(
        undefined,
        undefined,
        seeLinkText ? `${see} | ${seeLinkText}` : see,
      ),
    ]);
  }
  return ts.factory.createJSDocComment(text + '\n');
}
