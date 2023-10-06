# 🚧 Warning, unstable!

Thanks for using my work! Please don't use the `v1.0.0-beta` versions right now, things are rapidly and wildly changing as I prototype other libraries in the suite. You can use `v0.*` versions but I don't intend to support this. Star the repo to keep up to date with new releases.

# @awboost/cfntypes

Typescript types for AWS CloudFormation types.

## Template Types

The template types are available via the `template` package subpath. For performance reasons, the resources are not fully typed, i.e. no type-checking
is done for valid `Type` or `Properties` values.

```typescript
import { Template } from "@awboost/cfntypes/template";

const template: Template = {
  Resources: {
    MyFunction: {
      Type: "AWS::Lambda::Function",
      Properties: {
        // omitted for brevity
      },
    },
  },
};
```

## Resource Types

Instead, the accurate resource types can be imported from the `resources/*` package subpath.

```typescript
import { LambdaFunction } from "@awboost/cfntypes/resources/AWS-Lambda";
import { Template } from "@awboost/cfntypes/template";

const template: Template = {
  Resources: {
    MyFunction: new LambdaFunction("MyFunction", {
      // props go here
    }).toJSON(),
  },
};
```

The attributes of the resource can be conveniently accessed in the resource instance.

```typescript
const instance = new LambdaFunction("MyFunction", {
  // props
}).addToTemplate(template);

// all of the attributes are available via the attributes property.
// this property actually returns { "Fn::GetAtt": [...] } intrinsic function.
const arn = instance.attributes.Arn;
```
