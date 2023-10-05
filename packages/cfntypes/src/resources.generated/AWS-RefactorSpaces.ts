import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::RefactorSpaces::Application.ApiGatewayProxyInput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-refactorspaces-application-apigatewayproxyinput.html | AWS::RefactorSpaces::Application.ApiGatewayProxyInput}
 */
export interface RefactorSpacesApplicationApiGatewayProxyInput {
  StageName?: string;
  EndpointType?: string;
}
/**
 * Type definition for AWS::RefactorSpaces::Route.DefaultRouteInput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-refactorspaces-route-defaultrouteinput.html | AWS::RefactorSpaces::Route.DefaultRouteInput}
 */
export interface RefactorSpacesRouteDefaultRouteInput {
  ActivationState: string;
}
/**
 * Type definition for AWS::RefactorSpaces::Route.UriPathRouteInput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-refactorspaces-route-uripathrouteinput.html | AWS::RefactorSpaces::Route.UriPathRouteInput}
 */
export interface RefactorSpacesRouteUriPathRouteInput {
  SourcePath?: string;
  AppendSourcePath?: boolean;
  ActivationState: string;
  Methods?: any[];
  IncludeChildPaths?: boolean;
}
/**
 * Type definition for AWS::RefactorSpaces::Service.LambdaEndpointInput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-refactorspaces-service-lambdaendpointinput.html | AWS::RefactorSpaces::Service.LambdaEndpointInput}
 */
export interface RefactorSpacesServiceLambdaEndpointInput {
  Arn: string;
}
/**
 * Type definition for AWS::RefactorSpaces::Service.UrlEndpointInput
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-refactorspaces-service-urlendpointinput.html | AWS::RefactorSpaces::Service.UrlEndpointInput}
 */
export interface RefactorSpacesServiceUrlEndpointInput {
  HealthUrl?: string;
  Url: string;
}
/**
 * Type definition for AWS::RefactorSpaces::Application
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-application.html | AWS::RefactorSpaces::Application}
 */
export interface RefactorSpacesApplicationProps {
  EnvironmentIdentifier: string;
  VpcId: string;
  ApiGatewayProxy?: RefactorSpacesApplicationApiGatewayProxyInput;
  ProxyType: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::RefactorSpaces::Application
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-application.html | AWS::RefactorSpaces::Application}
 */
export interface RefactorSpacesApplicationAttribs {
  NlbArn?: string;
  ProxyUrl?: string;
  NlbName?: string;
  StageName?: string;
  ApiGatewayId?: string;
  VpcLinkId?: string;
  ApplicationIdentifier?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::RefactorSpaces::Application
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-application.html | AWS::RefactorSpaces::Application}
 */
export class RefactorSpacesApplication extends ResourceBase<
  "AWS::RefactorSpaces::Application",
  RefactorSpacesApplicationProps,
  RefactorSpacesApplicationAttribs
> {
  public static readonly Type = "AWS::RefactorSpaces::Application";
  public static readonly AttributeNames: readonly (keyof RefactorSpacesApplicationAttribs)[] =
    [
      "NlbArn",
      "ProxyUrl",
      "NlbName",
      "StageName",
      "ApiGatewayId",
      "VpcLinkId",
      "ApplicationIdentifier",
      "Arn",
    ];
  constructor(
    logicalId: string,
    properties: RefactorSpacesApplicationProps,
    options?: ResourceOptions,
  ) {
    super(
      RefactorSpacesApplication.Type,
      RefactorSpacesApplication.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::RefactorSpaces::Environment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-environment.html | AWS::RefactorSpaces::Environment}
 */
export interface RefactorSpacesEnvironmentProps {
  Description?: string;
  NetworkFabricType: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::RefactorSpaces::Environment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-environment.html | AWS::RefactorSpaces::Environment}
 */
export interface RefactorSpacesEnvironmentAttribs {
  TransitGatewayId?: string;
  EnvironmentIdentifier?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::RefactorSpaces::Environment
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-environment.html | AWS::RefactorSpaces::Environment}
 */
export class RefactorSpacesEnvironment extends ResourceBase<
  "AWS::RefactorSpaces::Environment",
  RefactorSpacesEnvironmentProps,
  RefactorSpacesEnvironmentAttribs
> {
  public static readonly Type = "AWS::RefactorSpaces::Environment";
  public static readonly AttributeNames: readonly (keyof RefactorSpacesEnvironmentAttribs)[] =
    ["TransitGatewayId", "EnvironmentIdentifier", "Arn"];
  constructor(
    logicalId: string,
    properties: RefactorSpacesEnvironmentProps,
    options?: ResourceOptions,
  ) {
    super(
      RefactorSpacesEnvironment.Type,
      RefactorSpacesEnvironment.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::RefactorSpaces::Route
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html | AWS::RefactorSpaces::Route}
 */
export interface RefactorSpacesRouteProps {
  UriPathRoute?: RefactorSpacesRouteUriPathRouteInput;
  EnvironmentIdentifier: string;
  RouteType: string;
  DefaultRoute?: RefactorSpacesRouteDefaultRouteInput;
  ServiceIdentifier: string;
  ApplicationIdentifier: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::RefactorSpaces::Route
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html | AWS::RefactorSpaces::Route}
 */
export interface RefactorSpacesRouteAttribs {
  RouteIdentifier?: string;
  Arn?: string;
  PathResourceToId?: string;
}
/**
 * Resource class for AWS::RefactorSpaces::Route
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html | AWS::RefactorSpaces::Route}
 */
export class RefactorSpacesRoute extends ResourceBase<
  "AWS::RefactorSpaces::Route",
  RefactorSpacesRouteProps,
  RefactorSpacesRouteAttribs
> {
  public static readonly Type = "AWS::RefactorSpaces::Route";
  public static readonly AttributeNames: readonly (keyof RefactorSpacesRouteAttribs)[] =
    ["RouteIdentifier", "Arn", "PathResourceToId"];
  constructor(
    logicalId: string,
    properties: RefactorSpacesRouteProps,
    options?: ResourceOptions,
  ) {
    super(
      RefactorSpacesRoute.Type,
      RefactorSpacesRoute.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::RefactorSpaces::Service
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-service.html | AWS::RefactorSpaces::Service}
 */
export interface RefactorSpacesServiceProps {
  LambdaEndpoint?: RefactorSpacesServiceLambdaEndpointInput;
  UrlEndpoint?: RefactorSpacesServiceUrlEndpointInput;
  Description?: string;
  EnvironmentIdentifier: string;
  VpcId?: string;
  EndpointType: string;
  ApplicationIdentifier: string;
  Tags?: Tag[];
  Name: string;
}
/**
 * Attributes type definition for AWS::RefactorSpaces::Service
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-service.html | AWS::RefactorSpaces::Service}
 */
export interface RefactorSpacesServiceAttribs {
  ServiceIdentifier?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::RefactorSpaces::Service
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-service.html | AWS::RefactorSpaces::Service}
 */
export class RefactorSpacesService extends ResourceBase<
  "AWS::RefactorSpaces::Service",
  RefactorSpacesServiceProps,
  RefactorSpacesServiceAttribs
> {
  public static readonly Type = "AWS::RefactorSpaces::Service";
  public static readonly AttributeNames: readonly (keyof RefactorSpacesServiceAttribs)[] =
    ["ServiceIdentifier", "Arn"];
  constructor(
    logicalId: string,
    properties: RefactorSpacesServiceProps,
    options?: ResourceOptions,
  ) {
    super(
      RefactorSpacesService.Type,
      RefactorSpacesService.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
