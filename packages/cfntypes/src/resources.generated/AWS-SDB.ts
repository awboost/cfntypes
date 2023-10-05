import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
/**
 * Type definition for AWS::SDB::Domain
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-simpledb.html | AWS::SDB::Domain}
 */
export interface SDBDomainProps {
  Description?: string;
}
/**
 * Resource class for AWS::SDB::Domain
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-simpledb.html | AWS::SDB::Domain}
 */
export class SDBDomain extends ResourceBase<
  "AWS::SDB::Domain",
  SDBDomainProps,
  Record<string, never>
> {
  public static readonly Type = "AWS::SDB::Domain";
  public static readonly AttributeNames = [];
  constructor(
    logicalId: string,
    properties: SDBDomainProps,
    options?: ResourceOptions,
  ) {
    super(
      SDBDomain.Type,
      SDBDomain.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
