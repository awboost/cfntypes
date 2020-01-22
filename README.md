# @fmtk/cfntypes

Typescript types for AWS CloudFormation types.

## Resource Types

The resource types are all defined individually as interfaces with predictable names, and also as properties of the `ResourceTypes` interface keyed by the CloudFormation resource type.

```typescript
import { ResourceTypes, ResourceType } from '@fmtk/cfntypes';

type ApiGatewayProps = ResourceTypes['AWS::ApiGateway::RestApi'];
// also exported as ApiGatewayRestApi

// the ResourceType type is defined as keyof ResourceTypes
const key: ResourceType = 'AWS::ApiGateway::RestApi';
```

## Attribute Types

The attribute types are all defined individually as interfaces with predictable names, and also as properties of the `AttributeTypes` interface keyed by the CloudFormation resource type. Note that not all resource types have attributes.

```typescript
import { AttributeTypes } from '@fmtk/cfntypes';

type ApiGatewayAttribs = AttributeTypes['AWS::ApiGateway::RestApi'];
// also exported as ApiGatewayRestApiAttributes
```
