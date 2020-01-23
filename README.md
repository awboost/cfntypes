# @fmtk/cfntypes

Typescript types for AWS CloudFormation types.

## Resource Types

The resource types are all defined individually as interfaces with predictable names, and also as properties of the `ResourceTypes` interface keyed by the CloudFormation resource type.

```typescript
import { ResourceTypes, ResourceType } from '@fmtk/cfntypes';

type ApiGatewayProps = ResourceTypes[ResourceType.ApiGatewayRestApi];
// also exported as ApiGatewayRestApi
```

## Attribute Types

The attribute types are all defined individually as interfaces with predictable names, and also as properties of the `AttributeTypes` interface keyed by the CloudFormation resource type. Note that not all resource types have attributes.

```typescript
import { AttributeTypes, AttributeTypeFor } from '@fmtk/cfntypes';

type ApiGatewayAttribs = AttributeTypes[ResourceType.ApiGatewayRestApi];
// also exported as ApiGatewayRestApiAttributes

// the AttributeTypeFor helper returns `never` for resources
// with no attributes defined
type NeverAttribs = AttributeTypeFor<ResourceType.ApiGatewayAccount>;
```
