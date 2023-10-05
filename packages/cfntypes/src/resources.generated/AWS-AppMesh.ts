import { ResourceBase } from "../util.js";
import { ResourceOptions } from "../template.js";
import { Tag } from "./core.js";
/**
 * Type definition for AWS::AppMesh::GatewayRoute.GatewayRouteHostnameMatch
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayroutehostnamematch.html | AWS::AppMesh::GatewayRoute.GatewayRouteHostnameMatch}
 */
export interface AppMeshGatewayRouteGatewayRouteHostnameMatch {
  Suffix?: string;
  Exact?: string;
}
/**
 * Type definition for AWS::AppMesh::GatewayRoute.GatewayRouteHostnameRewrite
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayroutehostnamerewrite.html | AWS::AppMesh::GatewayRoute.GatewayRouteHostnameRewrite}
 */
export interface AppMeshGatewayRouteGatewayRouteHostnameRewrite {
  DefaultTargetHostname?: string;
}
/**
 * Type definition for AWS::AppMesh::GatewayRoute.GatewayRouteMetadataMatch
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayroutemetadatamatch.html | AWS::AppMesh::GatewayRoute.GatewayRouteMetadataMatch}
 */
export interface AppMeshGatewayRouteGatewayRouteMetadataMatch {
  Suffix?: string;
  Regex?: string;
  Exact?: string;
  Prefix?: string;
  Range?: AppMeshGatewayRouteGatewayRouteRangeMatch;
}
/**
 * Type definition for AWS::AppMesh::GatewayRoute.GatewayRouteRangeMatch
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayrouterangematch.html | AWS::AppMesh::GatewayRoute.GatewayRouteRangeMatch}
 */
export interface AppMeshGatewayRouteGatewayRouteRangeMatch {
  Start: number;
  End: number;
}
/**
 * Type definition for AWS::AppMesh::GatewayRoute.GatewayRouteSpec
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayroutespec.html | AWS::AppMesh::GatewayRoute.GatewayRouteSpec}
 */
export interface AppMeshGatewayRouteGatewayRouteSpec {
  HttpRoute?: AppMeshGatewayRouteHttpGatewayRoute;
  Priority?: number;
  Http2Route?: AppMeshGatewayRouteHttpGatewayRoute;
  GrpcRoute?: AppMeshGatewayRouteGrpcGatewayRoute;
}
/**
 * Type definition for AWS::AppMesh::GatewayRoute.GatewayRouteTarget
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayroutetarget.html | AWS::AppMesh::GatewayRoute.GatewayRouteTarget}
 */
export interface AppMeshGatewayRouteGatewayRouteTarget {
  Port?: number;
  VirtualService: AppMeshGatewayRouteGatewayRouteVirtualService;
}
/**
 * Type definition for AWS::AppMesh::GatewayRoute.GatewayRouteVirtualService
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayroutevirtualservice.html | AWS::AppMesh::GatewayRoute.GatewayRouteVirtualService}
 */
export interface AppMeshGatewayRouteGatewayRouteVirtualService {
  VirtualServiceName: string;
}
/**
 * Type definition for AWS::AppMesh::GatewayRoute.GrpcGatewayRoute
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-grpcgatewayroute.html | AWS::AppMesh::GatewayRoute.GrpcGatewayRoute}
 */
export interface AppMeshGatewayRouteGrpcGatewayRoute {
  Action: AppMeshGatewayRouteGrpcGatewayRouteAction;
  Match: AppMeshGatewayRouteGrpcGatewayRouteMatch;
}
/**
 * Type definition for AWS::AppMesh::GatewayRoute.GrpcGatewayRouteAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-grpcgatewayrouteaction.html | AWS::AppMesh::GatewayRoute.GrpcGatewayRouteAction}
 */
export interface AppMeshGatewayRouteGrpcGatewayRouteAction {
  Target: AppMeshGatewayRouteGatewayRouteTarget;
  Rewrite?: AppMeshGatewayRouteGrpcGatewayRouteRewrite;
}
/**
 * Type definition for AWS::AppMesh::GatewayRoute.GrpcGatewayRouteMatch
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-grpcgatewayroutematch.html | AWS::AppMesh::GatewayRoute.GrpcGatewayRouteMatch}
 */
export interface AppMeshGatewayRouteGrpcGatewayRouteMatch {
  ServiceName?: string;
  Port?: number;
  Hostname?: AppMeshGatewayRouteGatewayRouteHostnameMatch;
  Metadata?: any[];
}
/**
 * Type definition for AWS::AppMesh::GatewayRoute.GrpcGatewayRouteMetadata
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-grpcgatewayroutemetadata.html | AWS::AppMesh::GatewayRoute.GrpcGatewayRouteMetadata}
 */
export interface AppMeshGatewayRouteGrpcGatewayRouteMetadata {
  Invert?: boolean;
  Name: string;
  Match?: AppMeshGatewayRouteGatewayRouteMetadataMatch;
}
/**
 * Type definition for AWS::AppMesh::GatewayRoute.GrpcGatewayRouteRewrite
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-grpcgatewayrouterewrite.html | AWS::AppMesh::GatewayRoute.GrpcGatewayRouteRewrite}
 */
export interface AppMeshGatewayRouteGrpcGatewayRouteRewrite {
  Hostname?: AppMeshGatewayRouteGatewayRouteHostnameRewrite;
}
/**
 * Type definition for AWS::AppMesh::GatewayRoute.HttpGatewayRoute
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayroute.html | AWS::AppMesh::GatewayRoute.HttpGatewayRoute}
 */
export interface AppMeshGatewayRouteHttpGatewayRoute {
  Action: AppMeshGatewayRouteHttpGatewayRouteAction;
  Match: AppMeshGatewayRouteHttpGatewayRouteMatch;
}
/**
 * Type definition for AWS::AppMesh::GatewayRoute.HttpGatewayRouteAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayrouteaction.html | AWS::AppMesh::GatewayRoute.HttpGatewayRouteAction}
 */
export interface AppMeshGatewayRouteHttpGatewayRouteAction {
  Target: AppMeshGatewayRouteGatewayRouteTarget;
  Rewrite?: AppMeshGatewayRouteHttpGatewayRouteRewrite;
}
/**
 * Type definition for AWS::AppMesh::GatewayRoute.HttpGatewayRouteHeader
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayrouteheader.html | AWS::AppMesh::GatewayRoute.HttpGatewayRouteHeader}
 */
export interface AppMeshGatewayRouteHttpGatewayRouteHeader {
  Invert?: boolean;
  Name: string;
  Match?: AppMeshGatewayRouteHttpGatewayRouteHeaderMatch;
}
/**
 * Type definition for AWS::AppMesh::GatewayRoute.HttpGatewayRouteHeaderMatch
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayrouteheadermatch.html | AWS::AppMesh::GatewayRoute.HttpGatewayRouteHeaderMatch}
 */
export interface AppMeshGatewayRouteHttpGatewayRouteHeaderMatch {
  Suffix?: string;
  Regex?: string;
  Exact?: string;
  Prefix?: string;
  Range?: AppMeshGatewayRouteGatewayRouteRangeMatch;
}
/**
 * Type definition for AWS::AppMesh::GatewayRoute.HttpGatewayRouteMatch
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayroutematch.html | AWS::AppMesh::GatewayRoute.HttpGatewayRouteMatch}
 */
export interface AppMeshGatewayRouteHttpGatewayRouteMatch {
  Path?: AppMeshGatewayRouteHttpPathMatch;
  Headers?: any[];
  Port?: number;
  Hostname?: AppMeshGatewayRouteGatewayRouteHostnameMatch;
  Prefix?: string;
  Method?: string;
  QueryParameters?: any[];
}
/**
 * Type definition for AWS::AppMesh::GatewayRoute.HttpGatewayRoutePathRewrite
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayroutepathrewrite.html | AWS::AppMesh::GatewayRoute.HttpGatewayRoutePathRewrite}
 */
export interface AppMeshGatewayRouteHttpGatewayRoutePathRewrite {
  Exact?: string;
}
/**
 * Type definition for AWS::AppMesh::GatewayRoute.HttpGatewayRoutePrefixRewrite
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayrouteprefixrewrite.html | AWS::AppMesh::GatewayRoute.HttpGatewayRoutePrefixRewrite}
 */
export interface AppMeshGatewayRouteHttpGatewayRoutePrefixRewrite {
  Value?: string;
  DefaultPrefix?: string;
}
/**
 * Type definition for AWS::AppMesh::GatewayRoute.HttpGatewayRouteRewrite
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayrouterewrite.html | AWS::AppMesh::GatewayRoute.HttpGatewayRouteRewrite}
 */
export interface AppMeshGatewayRouteHttpGatewayRouteRewrite {
  Path?: AppMeshGatewayRouteHttpGatewayRoutePathRewrite;
  Hostname?: AppMeshGatewayRouteGatewayRouteHostnameRewrite;
  Prefix?: AppMeshGatewayRouteHttpGatewayRoutePrefixRewrite;
}
/**
 * Type definition for AWS::AppMesh::GatewayRoute.HttpPathMatch
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httppathmatch.html | AWS::AppMesh::GatewayRoute.HttpPathMatch}
 */
export interface AppMeshGatewayRouteHttpPathMatch {
  Regex?: string;
  Exact?: string;
}
/**
 * Type definition for AWS::AppMesh::GatewayRoute.HttpQueryParameterMatch
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpqueryparametermatch.html | AWS::AppMesh::GatewayRoute.HttpQueryParameterMatch}
 */
export interface AppMeshGatewayRouteHttpQueryParameterMatch {
  Exact?: string;
}
/**
 * Type definition for AWS::AppMesh::GatewayRoute.QueryParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-queryparameter.html | AWS::AppMesh::GatewayRoute.QueryParameter}
 */
export interface AppMeshGatewayRouteQueryParameter {
  Name: string;
  Match?: AppMeshGatewayRouteHttpQueryParameterMatch;
}
/**
 * Type definition for AWS::AppMesh::Mesh.EgressFilter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-mesh-egressfilter.html | AWS::AppMesh::Mesh.EgressFilter}
 */
export interface AppMeshMeshEgressFilter {
  Type: string;
}
/**
 * Type definition for AWS::AppMesh::Mesh.MeshServiceDiscovery
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-mesh-meshservicediscovery.html | AWS::AppMesh::Mesh.MeshServiceDiscovery}
 */
export interface AppMeshMeshMeshServiceDiscovery {
  IpPreference?: string;
}
/**
 * Type definition for AWS::AppMesh::Mesh.MeshSpec
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-mesh-meshspec.html | AWS::AppMesh::Mesh.MeshSpec}
 */
export interface AppMeshMeshMeshSpec {
  EgressFilter?: AppMeshMeshEgressFilter;
  ServiceDiscovery?: AppMeshMeshMeshServiceDiscovery;
}
/**
 * Type definition for AWS::AppMesh::Route.Duration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-duration.html | AWS::AppMesh::Route.Duration}
 */
export interface AppMeshRouteDuration {
  Value: number;
  Unit: string;
}
/**
 * Type definition for AWS::AppMesh::Route.GrpcRetryPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcretrypolicy.html | AWS::AppMesh::Route.GrpcRetryPolicy}
 */
export interface AppMeshRouteGrpcRetryPolicy {
  MaxRetries: number;
  PerRetryTimeout: AppMeshRouteDuration;
  GrpcRetryEvents?: any[];
  HttpRetryEvents?: any[];
  TcpRetryEvents?: any[];
}
/**
 * Type definition for AWS::AppMesh::Route.GrpcRoute
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcroute.html | AWS::AppMesh::Route.GrpcRoute}
 */
export interface AppMeshRouteGrpcRoute {
  Action: AppMeshRouteGrpcRouteAction;
  Timeout?: AppMeshRouteGrpcTimeout;
  RetryPolicy?: AppMeshRouteGrpcRetryPolicy;
  Match: AppMeshRouteGrpcRouteMatch;
}
/**
 * Type definition for AWS::AppMesh::Route.GrpcRouteAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcrouteaction.html | AWS::AppMesh::Route.GrpcRouteAction}
 */
export interface AppMeshRouteGrpcRouteAction {
  WeightedTargets: any[];
}
/**
 * Type definition for AWS::AppMesh::Route.GrpcRouteMatch
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcroutematch.html | AWS::AppMesh::Route.GrpcRouteMatch}
 */
export interface AppMeshRouteGrpcRouteMatch {
  ServiceName?: string;
  Port?: number;
  Metadata?: any[];
  MethodName?: string;
}
/**
 * Type definition for AWS::AppMesh::Route.GrpcRouteMetadata
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcroutemetadata.html | AWS::AppMesh::Route.GrpcRouteMetadata}
 */
export interface AppMeshRouteGrpcRouteMetadata {
  Invert?: boolean;
  Name: string;
  Match?: AppMeshRouteGrpcRouteMetadataMatchMethod;
}
/**
 * Type definition for AWS::AppMesh::Route.GrpcRouteMetadataMatchMethod
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcroutemetadatamatchmethod.html | AWS::AppMesh::Route.GrpcRouteMetadataMatchMethod}
 */
export interface AppMeshRouteGrpcRouteMetadataMatchMethod {
  Suffix?: string;
  Regex?: string;
  Exact?: string;
  Prefix?: string;
  Range?: AppMeshRouteMatchRange;
}
/**
 * Type definition for AWS::AppMesh::Route.GrpcTimeout
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpctimeout.html | AWS::AppMesh::Route.GrpcTimeout}
 */
export interface AppMeshRouteGrpcTimeout {
  PerRequest?: AppMeshRouteDuration;
  Idle?: AppMeshRouteDuration;
}
/**
 * Type definition for AWS::AppMesh::Route.HeaderMatchMethod
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-headermatchmethod.html | AWS::AppMesh::Route.HeaderMatchMethod}
 */
export interface AppMeshRouteHeaderMatchMethod {
  Suffix?: string;
  Regex?: string;
  Exact?: string;
  Prefix?: string;
  Range?: AppMeshRouteMatchRange;
}
/**
 * Type definition for AWS::AppMesh::Route.HttpPathMatch
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httppathmatch.html | AWS::AppMesh::Route.HttpPathMatch}
 */
export interface AppMeshRouteHttpPathMatch {
  Regex?: string;
  Exact?: string;
}
/**
 * Type definition for AWS::AppMesh::Route.HttpQueryParameterMatch
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httpqueryparametermatch.html | AWS::AppMesh::Route.HttpQueryParameterMatch}
 */
export interface AppMeshRouteHttpQueryParameterMatch {
  Exact?: string;
}
/**
 * Type definition for AWS::AppMesh::Route.HttpRetryPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httpretrypolicy.html | AWS::AppMesh::Route.HttpRetryPolicy}
 */
export interface AppMeshRouteHttpRetryPolicy {
  MaxRetries: number;
  PerRetryTimeout: AppMeshRouteDuration;
  HttpRetryEvents?: any[];
  TcpRetryEvents?: any[];
}
/**
 * Type definition for AWS::AppMesh::Route.HttpRoute
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httproute.html | AWS::AppMesh::Route.HttpRoute}
 */
export interface AppMeshRouteHttpRoute {
  Action: AppMeshRouteHttpRouteAction;
  Timeout?: AppMeshRouteHttpTimeout;
  RetryPolicy?: AppMeshRouteHttpRetryPolicy;
  Match: AppMeshRouteHttpRouteMatch;
}
/**
 * Type definition for AWS::AppMesh::Route.HttpRouteAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httprouteaction.html | AWS::AppMesh::Route.HttpRouteAction}
 */
export interface AppMeshRouteHttpRouteAction {
  WeightedTargets: any[];
}
/**
 * Type definition for AWS::AppMesh::Route.HttpRouteHeader
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httprouteheader.html | AWS::AppMesh::Route.HttpRouteHeader}
 */
export interface AppMeshRouteHttpRouteHeader {
  Invert?: boolean;
  Name: string;
  Match?: AppMeshRouteHeaderMatchMethod;
}
/**
 * Type definition for AWS::AppMesh::Route.HttpRouteMatch
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httproutematch.html | AWS::AppMesh::Route.HttpRouteMatch}
 */
export interface AppMeshRouteHttpRouteMatch {
  Path?: AppMeshRouteHttpPathMatch;
  Scheme?: string;
  Headers?: any[];
  Port?: number;
  Prefix?: string;
  Method?: string;
  QueryParameters?: any[];
}
/**
 * Type definition for AWS::AppMesh::Route.HttpTimeout
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httptimeout.html | AWS::AppMesh::Route.HttpTimeout}
 */
export interface AppMeshRouteHttpTimeout {
  PerRequest?: AppMeshRouteDuration;
  Idle?: AppMeshRouteDuration;
}
/**
 * Type definition for AWS::AppMesh::Route.MatchRange
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-matchrange.html | AWS::AppMesh::Route.MatchRange}
 */
export interface AppMeshRouteMatchRange {
  Start: number;
  End: number;
}
/**
 * Type definition for AWS::AppMesh::Route.QueryParameter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-queryparameter.html | AWS::AppMesh::Route.QueryParameter}
 */
export interface AppMeshRouteQueryParameter {
  Name: string;
  Match?: AppMeshRouteHttpQueryParameterMatch;
}
/**
 * Type definition for AWS::AppMesh::Route.RouteSpec
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-routespec.html | AWS::AppMesh::Route.RouteSpec}
 */
export interface AppMeshRouteRouteSpec {
  HttpRoute?: AppMeshRouteHttpRoute;
  Priority?: number;
  Http2Route?: AppMeshRouteHttpRoute;
  GrpcRoute?: AppMeshRouteGrpcRoute;
  TcpRoute?: AppMeshRouteTcpRoute;
}
/**
 * Type definition for AWS::AppMesh::Route.TcpRoute
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-tcproute.html | AWS::AppMesh::Route.TcpRoute}
 */
export interface AppMeshRouteTcpRoute {
  Action: AppMeshRouteTcpRouteAction;
  Timeout?: AppMeshRouteTcpTimeout;
  Match?: AppMeshRouteTcpRouteMatch;
}
/**
 * Type definition for AWS::AppMesh::Route.TcpRouteAction
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-tcprouteaction.html | AWS::AppMesh::Route.TcpRouteAction}
 */
export interface AppMeshRouteTcpRouteAction {
  WeightedTargets: any[];
}
/**
 * Type definition for AWS::AppMesh::Route.TcpRouteMatch
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-tcproutematch.html | AWS::AppMesh::Route.TcpRouteMatch}
 */
export interface AppMeshRouteTcpRouteMatch {
  Port?: number;
}
/**
 * Type definition for AWS::AppMesh::Route.TcpTimeout
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-tcptimeout.html | AWS::AppMesh::Route.TcpTimeout}
 */
export interface AppMeshRouteTcpTimeout {
  Idle?: AppMeshRouteDuration;
}
/**
 * Type definition for AWS::AppMesh::Route.WeightedTarget
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-weightedtarget.html | AWS::AppMesh::Route.WeightedTarget}
 */
export interface AppMeshRouteWeightedTarget {
  VirtualNode: string;
  Port?: number;
  Weight: number;
}
/**
 * Type definition for AWS::AppMesh::VirtualGateway.JsonFormatRef
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-jsonformatref.html | AWS::AppMesh::VirtualGateway.JsonFormatRef}
 */
export interface AppMeshVirtualGatewayJsonFormatRef {
  Value: string;
  Key: string;
}
/**
 * Type definition for AWS::AppMesh::VirtualGateway.LoggingFormat
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-loggingformat.html | AWS::AppMesh::VirtualGateway.LoggingFormat}
 */
export interface AppMeshVirtualGatewayLoggingFormat {
  Text?: string;
  Json?: any[];
}
/**
 * Type definition for AWS::AppMesh::VirtualGateway.SubjectAlternativeNameMatchers
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-subjectalternativenamematchers.html | AWS::AppMesh::VirtualGateway.SubjectAlternativeNameMatchers}
 */
export interface AppMeshVirtualGatewaySubjectAlternativeNameMatchers {
  Exact?: any[];
}
/**
 * Type definition for AWS::AppMesh::VirtualGateway.SubjectAlternativeNames
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-subjectalternativenames.html | AWS::AppMesh::VirtualGateway.SubjectAlternativeNames}
 */
export interface AppMeshVirtualGatewaySubjectAlternativeNames {
  Match: AppMeshVirtualGatewaySubjectAlternativeNameMatchers;
}
/**
 * Type definition for AWS::AppMesh::VirtualGateway.VirtualGatewayAccessLog
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayaccesslog.html | AWS::AppMesh::VirtualGateway.VirtualGatewayAccessLog}
 */
export interface AppMeshVirtualGatewayVirtualGatewayAccessLog {
  File?: AppMeshVirtualGatewayVirtualGatewayFileAccessLog;
}
/**
 * Type definition for AWS::AppMesh::VirtualGateway.VirtualGatewayBackendDefaults
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaybackenddefaults.html | AWS::AppMesh::VirtualGateway.VirtualGatewayBackendDefaults}
 */
export interface AppMeshVirtualGatewayVirtualGatewayBackendDefaults {
  ClientPolicy?: AppMeshVirtualGatewayVirtualGatewayClientPolicy;
}
/**
 * Type definition for AWS::AppMesh::VirtualGateway.VirtualGatewayClientPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayclientpolicy.html | AWS::AppMesh::VirtualGateway.VirtualGatewayClientPolicy}
 */
export interface AppMeshVirtualGatewayVirtualGatewayClientPolicy {
  TLS?: AppMeshVirtualGatewayVirtualGatewayClientPolicyTls;
}
/**
 * Type definition for AWS::AppMesh::VirtualGateway.VirtualGatewayClientPolicyTls
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayclientpolicytls.html | AWS::AppMesh::VirtualGateway.VirtualGatewayClientPolicyTls}
 */
export interface AppMeshVirtualGatewayVirtualGatewayClientPolicyTls {
  Validation: AppMeshVirtualGatewayVirtualGatewayTlsValidationContext;
  Enforce?: boolean;
  Ports?: any[];
  Certificate?: AppMeshVirtualGatewayVirtualGatewayClientTlsCertificate;
}
/**
 * Type definition for AWS::AppMesh::VirtualGateway.VirtualGatewayClientTlsCertificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayclienttlscertificate.html | AWS::AppMesh::VirtualGateway.VirtualGatewayClientTlsCertificate}
 */
export interface AppMeshVirtualGatewayVirtualGatewayClientTlsCertificate {
  SDS?: AppMeshVirtualGatewayVirtualGatewayListenerTlsSdsCertificate;
  File?: AppMeshVirtualGatewayVirtualGatewayListenerTlsFileCertificate;
}
/**
 * Type definition for AWS::AppMesh::VirtualGateway.VirtualGatewayConnectionPool
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayconnectionpool.html | AWS::AppMesh::VirtualGateway.VirtualGatewayConnectionPool}
 */
export interface AppMeshVirtualGatewayVirtualGatewayConnectionPool {
  HTTP2?: AppMeshVirtualGatewayVirtualGatewayHttp2ConnectionPool;
  HTTP?: AppMeshVirtualGatewayVirtualGatewayHttpConnectionPool;
  GRPC?: AppMeshVirtualGatewayVirtualGatewayGrpcConnectionPool;
}
/**
 * Type definition for AWS::AppMesh::VirtualGateway.VirtualGatewayFileAccessLog
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayfileaccesslog.html | AWS::AppMesh::VirtualGateway.VirtualGatewayFileAccessLog}
 */
export interface AppMeshVirtualGatewayVirtualGatewayFileAccessLog {
  Path: string;
  Format?: AppMeshVirtualGatewayLoggingFormat;
}
/**
 * Type definition for AWS::AppMesh::VirtualGateway.VirtualGatewayGrpcConnectionPool
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaygrpcconnectionpool.html | AWS::AppMesh::VirtualGateway.VirtualGatewayGrpcConnectionPool}
 */
export interface AppMeshVirtualGatewayVirtualGatewayGrpcConnectionPool {
  MaxRequests: number;
}
/**
 * Type definition for AWS::AppMesh::VirtualGateway.VirtualGatewayHealthCheckPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayhealthcheckpolicy.html | AWS::AppMesh::VirtualGateway.VirtualGatewayHealthCheckPolicy}
 */
export interface AppMeshVirtualGatewayVirtualGatewayHealthCheckPolicy {
  Path?: string;
  UnhealthyThreshold: number;
  Port?: number;
  HealthyThreshold: number;
  TimeoutMillis: number;
  Protocol: string;
  IntervalMillis: number;
}
/**
 * Type definition for AWS::AppMesh::VirtualGateway.VirtualGatewayHttp2ConnectionPool
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayhttp2connectionpool.html | AWS::AppMesh::VirtualGateway.VirtualGatewayHttp2ConnectionPool}
 */
export interface AppMeshVirtualGatewayVirtualGatewayHttp2ConnectionPool {
  MaxRequests: number;
}
/**
 * Type definition for AWS::AppMesh::VirtualGateway.VirtualGatewayHttpConnectionPool
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayhttpconnectionpool.html | AWS::AppMesh::VirtualGateway.VirtualGatewayHttpConnectionPool}
 */
export interface AppMeshVirtualGatewayVirtualGatewayHttpConnectionPool {
  MaxConnections: number;
  MaxPendingRequests?: number;
}
/**
 * Type definition for AWS::AppMesh::VirtualGateway.VirtualGatewayListener
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistener.html | AWS::AppMesh::VirtualGateway.VirtualGatewayListener}
 */
export interface AppMeshVirtualGatewayVirtualGatewayListener {
  ConnectionPool?: AppMeshVirtualGatewayVirtualGatewayConnectionPool;
  HealthCheck?: AppMeshVirtualGatewayVirtualGatewayHealthCheckPolicy;
  TLS?: AppMeshVirtualGatewayVirtualGatewayListenerTls;
  PortMapping: AppMeshVirtualGatewayVirtualGatewayPortMapping;
}
/**
 * Type definition for AWS::AppMesh::VirtualGateway.VirtualGatewayListenerTls
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertls.html | AWS::AppMesh::VirtualGateway.VirtualGatewayListenerTls}
 */
export interface AppMeshVirtualGatewayVirtualGatewayListenerTls {
  Validation?: AppMeshVirtualGatewayVirtualGatewayListenerTlsValidationContext;
  Mode: string;
  Certificate: AppMeshVirtualGatewayVirtualGatewayListenerTlsCertificate;
}
/**
 * Type definition for AWS::AppMesh::VirtualGateway.VirtualGatewayListenerTlsAcmCertificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlsacmcertificate.html | AWS::AppMesh::VirtualGateway.VirtualGatewayListenerTlsAcmCertificate}
 */
export interface AppMeshVirtualGatewayVirtualGatewayListenerTlsAcmCertificate {
  CertificateArn: string;
}
/**
 * Type definition for AWS::AppMesh::VirtualGateway.VirtualGatewayListenerTlsCertificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlscertificate.html | AWS::AppMesh::VirtualGateway.VirtualGatewayListenerTlsCertificate}
 */
export interface AppMeshVirtualGatewayVirtualGatewayListenerTlsCertificate {
  SDS?: AppMeshVirtualGatewayVirtualGatewayListenerTlsSdsCertificate;
  ACM?: AppMeshVirtualGatewayVirtualGatewayListenerTlsAcmCertificate;
  File?: AppMeshVirtualGatewayVirtualGatewayListenerTlsFileCertificate;
}
/**
 * Type definition for AWS::AppMesh::VirtualGateway.VirtualGatewayListenerTlsFileCertificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlsfilecertificate.html | AWS::AppMesh::VirtualGateway.VirtualGatewayListenerTlsFileCertificate}
 */
export interface AppMeshVirtualGatewayVirtualGatewayListenerTlsFileCertificate {
  PrivateKey: string;
  CertificateChain: string;
}
/**
 * Type definition for AWS::AppMesh::VirtualGateway.VirtualGatewayListenerTlsSdsCertificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlssdscertificate.html | AWS::AppMesh::VirtualGateway.VirtualGatewayListenerTlsSdsCertificate}
 */
export interface AppMeshVirtualGatewayVirtualGatewayListenerTlsSdsCertificate {
  SecretName: string;
}
/**
 * Type definition for AWS::AppMesh::VirtualGateway.VirtualGatewayListenerTlsValidationContext
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlsvalidationcontext.html | AWS::AppMesh::VirtualGateway.VirtualGatewayListenerTlsValidationContext}
 */
export interface AppMeshVirtualGatewayVirtualGatewayListenerTlsValidationContext {
  SubjectAlternativeNames?: AppMeshVirtualGatewaySubjectAlternativeNames;
  Trust: AppMeshVirtualGatewayVirtualGatewayListenerTlsValidationContextTrust;
}
/**
 * Type definition for AWS::AppMesh::VirtualGateway.VirtualGatewayListenerTlsValidationContextTrust
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlsvalidationcontexttrust.html | AWS::AppMesh::VirtualGateway.VirtualGatewayListenerTlsValidationContextTrust}
 */
export interface AppMeshVirtualGatewayVirtualGatewayListenerTlsValidationContextTrust {
  SDS?: AppMeshVirtualGatewayVirtualGatewayTlsValidationContextSdsTrust;
  File?: AppMeshVirtualGatewayVirtualGatewayTlsValidationContextFileTrust;
}
/**
 * Type definition for AWS::AppMesh::VirtualGateway.VirtualGatewayLogging
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylogging.html | AWS::AppMesh::VirtualGateway.VirtualGatewayLogging}
 */
export interface AppMeshVirtualGatewayVirtualGatewayLogging {
  AccessLog?: AppMeshVirtualGatewayVirtualGatewayAccessLog;
}
/**
 * Type definition for AWS::AppMesh::VirtualGateway.VirtualGatewayPortMapping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayportmapping.html | AWS::AppMesh::VirtualGateway.VirtualGatewayPortMapping}
 */
export interface AppMeshVirtualGatewayVirtualGatewayPortMapping {
  Port: number;
  Protocol: string;
}
/**
 * Type definition for AWS::AppMesh::VirtualGateway.VirtualGatewaySpec
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayspec.html | AWS::AppMesh::VirtualGateway.VirtualGatewaySpec}
 */
export interface AppMeshVirtualGatewayVirtualGatewaySpec {
  Logging?: AppMeshVirtualGatewayVirtualGatewayLogging;
  Listeners: any[];
  BackendDefaults?: AppMeshVirtualGatewayVirtualGatewayBackendDefaults;
}
/**
 * Type definition for AWS::AppMesh::VirtualGateway.VirtualGatewayTlsValidationContext
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontext.html | AWS::AppMesh::VirtualGateway.VirtualGatewayTlsValidationContext}
 */
export interface AppMeshVirtualGatewayVirtualGatewayTlsValidationContext {
  SubjectAlternativeNames?: AppMeshVirtualGatewaySubjectAlternativeNames;
  Trust: AppMeshVirtualGatewayVirtualGatewayTlsValidationContextTrust;
}
/**
 * Type definition for AWS::AppMesh::VirtualGateway.VirtualGatewayTlsValidationContextAcmTrust
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontextacmtrust.html | AWS::AppMesh::VirtualGateway.VirtualGatewayTlsValidationContextAcmTrust}
 */
export interface AppMeshVirtualGatewayVirtualGatewayTlsValidationContextAcmTrust {
  CertificateAuthorityArns: any[];
}
/**
 * Type definition for AWS::AppMesh::VirtualGateway.VirtualGatewayTlsValidationContextFileTrust
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontextfiletrust.html | AWS::AppMesh::VirtualGateway.VirtualGatewayTlsValidationContextFileTrust}
 */
export interface AppMeshVirtualGatewayVirtualGatewayTlsValidationContextFileTrust {
  CertificateChain: string;
}
/**
 * Type definition for AWS::AppMesh::VirtualGateway.VirtualGatewayTlsValidationContextSdsTrust
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontextsdstrust.html | AWS::AppMesh::VirtualGateway.VirtualGatewayTlsValidationContextSdsTrust}
 */
export interface AppMeshVirtualGatewayVirtualGatewayTlsValidationContextSdsTrust {
  SecretName: string;
}
/**
 * Type definition for AWS::AppMesh::VirtualGateway.VirtualGatewayTlsValidationContextTrust
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontexttrust.html | AWS::AppMesh::VirtualGateway.VirtualGatewayTlsValidationContextTrust}
 */
export interface AppMeshVirtualGatewayVirtualGatewayTlsValidationContextTrust {
  SDS?: AppMeshVirtualGatewayVirtualGatewayTlsValidationContextSdsTrust;
  ACM?: AppMeshVirtualGatewayVirtualGatewayTlsValidationContextAcmTrust;
  File?: AppMeshVirtualGatewayVirtualGatewayTlsValidationContextFileTrust;
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.AccessLog
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-accesslog.html | AWS::AppMesh::VirtualNode.AccessLog}
 */
export interface AppMeshVirtualNodeAccessLog {
  File?: AppMeshVirtualNodeFileAccessLog;
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.AwsCloudMapInstanceAttribute
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-awscloudmapinstanceattribute.html | AWS::AppMesh::VirtualNode.AwsCloudMapInstanceAttribute}
 */
export interface AppMeshVirtualNodeAwsCloudMapInstanceAttribute {
  Value: string;
  Key: string;
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.AwsCloudMapServiceDiscovery
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-awscloudmapservicediscovery.html | AWS::AppMesh::VirtualNode.AwsCloudMapServiceDiscovery}
 */
export interface AppMeshVirtualNodeAwsCloudMapServiceDiscovery {
  NamespaceName: string;
  ServiceName: string;
  IpPreference?: string;
  Attributes?: any[];
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.Backend
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-backend.html | AWS::AppMesh::VirtualNode.Backend}
 */
export interface AppMeshVirtualNodeBackend {
  VirtualService?: AppMeshVirtualNodeVirtualServiceBackend;
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.BackendDefaults
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-backenddefaults.html | AWS::AppMesh::VirtualNode.BackendDefaults}
 */
export interface AppMeshVirtualNodeBackendDefaults {
  ClientPolicy?: AppMeshVirtualNodeClientPolicy;
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.ClientPolicy
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-clientpolicy.html | AWS::AppMesh::VirtualNode.ClientPolicy}
 */
export interface AppMeshVirtualNodeClientPolicy {
  TLS?: AppMeshVirtualNodeClientPolicyTls;
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.ClientPolicyTls
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-clientpolicytls.html | AWS::AppMesh::VirtualNode.ClientPolicyTls}
 */
export interface AppMeshVirtualNodeClientPolicyTls {
  Validation: AppMeshVirtualNodeTlsValidationContext;
  Enforce?: boolean;
  Ports?: any[];
  Certificate?: AppMeshVirtualNodeClientTlsCertificate;
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.ClientTlsCertificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-clienttlscertificate.html | AWS::AppMesh::VirtualNode.ClientTlsCertificate}
 */
export interface AppMeshVirtualNodeClientTlsCertificate {
  SDS?: AppMeshVirtualNodeListenerTlsSdsCertificate;
  File?: AppMeshVirtualNodeListenerTlsFileCertificate;
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.DnsServiceDiscovery
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-dnsservicediscovery.html | AWS::AppMesh::VirtualNode.DnsServiceDiscovery}
 */
export interface AppMeshVirtualNodeDnsServiceDiscovery {
  IpPreference?: string;
  Hostname: string;
  ResponseType?: string;
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.Duration
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-duration.html | AWS::AppMesh::VirtualNode.Duration}
 */
export interface AppMeshVirtualNodeDuration {
  Value: number;
  Unit: string;
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.FileAccessLog
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-fileaccesslog.html | AWS::AppMesh::VirtualNode.FileAccessLog}
 */
export interface AppMeshVirtualNodeFileAccessLog {
  Path: string;
  Format?: AppMeshVirtualNodeLoggingFormat;
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.GrpcTimeout
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-grpctimeout.html | AWS::AppMesh::VirtualNode.GrpcTimeout}
 */
export interface AppMeshVirtualNodeGrpcTimeout {
  PerRequest?: AppMeshVirtualNodeDuration;
  Idle?: AppMeshVirtualNodeDuration;
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.HealthCheck
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-healthcheck.html | AWS::AppMesh::VirtualNode.HealthCheck}
 */
export interface AppMeshVirtualNodeHealthCheck {
  Path?: string;
  UnhealthyThreshold: number;
  Port?: number;
  HealthyThreshold: number;
  TimeoutMillis: number;
  Protocol: string;
  IntervalMillis: number;
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.HttpTimeout
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-httptimeout.html | AWS::AppMesh::VirtualNode.HttpTimeout}
 */
export interface AppMeshVirtualNodeHttpTimeout {
  PerRequest?: AppMeshVirtualNodeDuration;
  Idle?: AppMeshVirtualNodeDuration;
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.JsonFormatRef
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-jsonformatref.html | AWS::AppMesh::VirtualNode.JsonFormatRef}
 */
export interface AppMeshVirtualNodeJsonFormatRef {
  Value: string;
  Key: string;
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.Listener
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listener.html | AWS::AppMesh::VirtualNode.Listener}
 */
export interface AppMeshVirtualNodeListener {
  ConnectionPool?: AppMeshVirtualNodeVirtualNodeConnectionPool;
  Timeout?: AppMeshVirtualNodeListenerTimeout;
  HealthCheck?: AppMeshVirtualNodeHealthCheck;
  TLS?: AppMeshVirtualNodeListenerTls;
  PortMapping: AppMeshVirtualNodePortMapping;
  OutlierDetection?: AppMeshVirtualNodeOutlierDetection;
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.ListenerTimeout
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertimeout.html | AWS::AppMesh::VirtualNode.ListenerTimeout}
 */
export interface AppMeshVirtualNodeListenerTimeout {
  TCP?: AppMeshVirtualNodeTcpTimeout;
  HTTP2?: AppMeshVirtualNodeHttpTimeout;
  HTTP?: AppMeshVirtualNodeHttpTimeout;
  GRPC?: AppMeshVirtualNodeGrpcTimeout;
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.ListenerTls
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertls.html | AWS::AppMesh::VirtualNode.ListenerTls}
 */
export interface AppMeshVirtualNodeListenerTls {
  Validation?: AppMeshVirtualNodeListenerTlsValidationContext;
  Mode: string;
  Certificate: AppMeshVirtualNodeListenerTlsCertificate;
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.ListenerTlsAcmCertificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertlsacmcertificate.html | AWS::AppMesh::VirtualNode.ListenerTlsAcmCertificate}
 */
export interface AppMeshVirtualNodeListenerTlsAcmCertificate {
  CertificateArn: string;
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.ListenerTlsCertificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertlscertificate.html | AWS::AppMesh::VirtualNode.ListenerTlsCertificate}
 */
export interface AppMeshVirtualNodeListenerTlsCertificate {
  SDS?: AppMeshVirtualNodeListenerTlsSdsCertificate;
  ACM?: AppMeshVirtualNodeListenerTlsAcmCertificate;
  File?: AppMeshVirtualNodeListenerTlsFileCertificate;
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.ListenerTlsFileCertificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertlsfilecertificate.html | AWS::AppMesh::VirtualNode.ListenerTlsFileCertificate}
 */
export interface AppMeshVirtualNodeListenerTlsFileCertificate {
  PrivateKey: string;
  CertificateChain: string;
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.ListenerTlsSdsCertificate
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertlssdscertificate.html | AWS::AppMesh::VirtualNode.ListenerTlsSdsCertificate}
 */
export interface AppMeshVirtualNodeListenerTlsSdsCertificate {
  SecretName: string;
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.ListenerTlsValidationContext
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertlsvalidationcontext.html | AWS::AppMesh::VirtualNode.ListenerTlsValidationContext}
 */
export interface AppMeshVirtualNodeListenerTlsValidationContext {
  SubjectAlternativeNames?: AppMeshVirtualNodeSubjectAlternativeNames;
  Trust: AppMeshVirtualNodeListenerTlsValidationContextTrust;
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.ListenerTlsValidationContextTrust
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertlsvalidationcontexttrust.html | AWS::AppMesh::VirtualNode.ListenerTlsValidationContextTrust}
 */
export interface AppMeshVirtualNodeListenerTlsValidationContextTrust {
  SDS?: AppMeshVirtualNodeTlsValidationContextSdsTrust;
  File?: AppMeshVirtualNodeTlsValidationContextFileTrust;
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.Logging
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-logging.html | AWS::AppMesh::VirtualNode.Logging}
 */
export interface AppMeshVirtualNodeLogging {
  AccessLog?: AppMeshVirtualNodeAccessLog;
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.LoggingFormat
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-loggingformat.html | AWS::AppMesh::VirtualNode.LoggingFormat}
 */
export interface AppMeshVirtualNodeLoggingFormat {
  Text?: string;
  Json?: any[];
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.OutlierDetection
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-outlierdetection.html | AWS::AppMesh::VirtualNode.OutlierDetection}
 */
export interface AppMeshVirtualNodeOutlierDetection {
  MaxEjectionPercent: number;
  BaseEjectionDuration: AppMeshVirtualNodeDuration;
  MaxServerErrors: number;
  Interval: AppMeshVirtualNodeDuration;
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.PortMapping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-portmapping.html | AWS::AppMesh::VirtualNode.PortMapping}
 */
export interface AppMeshVirtualNodePortMapping {
  Port: number;
  Protocol: string;
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.ServiceDiscovery
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-servicediscovery.html | AWS::AppMesh::VirtualNode.ServiceDiscovery}
 */
export interface AppMeshVirtualNodeServiceDiscovery {
  DNS?: AppMeshVirtualNodeDnsServiceDiscovery;
  AWSCloudMap?: AppMeshVirtualNodeAwsCloudMapServiceDiscovery;
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.SubjectAlternativeNameMatchers
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-subjectalternativenamematchers.html | AWS::AppMesh::VirtualNode.SubjectAlternativeNameMatchers}
 */
export interface AppMeshVirtualNodeSubjectAlternativeNameMatchers {
  Exact?: any[];
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.SubjectAlternativeNames
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-subjectalternativenames.html | AWS::AppMesh::VirtualNode.SubjectAlternativeNames}
 */
export interface AppMeshVirtualNodeSubjectAlternativeNames {
  Match: AppMeshVirtualNodeSubjectAlternativeNameMatchers;
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.TcpTimeout
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-tcptimeout.html | AWS::AppMesh::VirtualNode.TcpTimeout}
 */
export interface AppMeshVirtualNodeTcpTimeout {
  Idle?: AppMeshVirtualNodeDuration;
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.TlsValidationContext
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-tlsvalidationcontext.html | AWS::AppMesh::VirtualNode.TlsValidationContext}
 */
export interface AppMeshVirtualNodeTlsValidationContext {
  SubjectAlternativeNames?: AppMeshVirtualNodeSubjectAlternativeNames;
  Trust: AppMeshVirtualNodeTlsValidationContextTrust;
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.TlsValidationContextAcmTrust
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-tlsvalidationcontextacmtrust.html | AWS::AppMesh::VirtualNode.TlsValidationContextAcmTrust}
 */
export interface AppMeshVirtualNodeTlsValidationContextAcmTrust {
  CertificateAuthorityArns: any[];
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.TlsValidationContextFileTrust
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-tlsvalidationcontextfiletrust.html | AWS::AppMesh::VirtualNode.TlsValidationContextFileTrust}
 */
export interface AppMeshVirtualNodeTlsValidationContextFileTrust {
  CertificateChain: string;
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.TlsValidationContextSdsTrust
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-tlsvalidationcontextsdstrust.html | AWS::AppMesh::VirtualNode.TlsValidationContextSdsTrust}
 */
export interface AppMeshVirtualNodeTlsValidationContextSdsTrust {
  SecretName: string;
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.TlsValidationContextTrust
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-tlsvalidationcontexttrust.html | AWS::AppMesh::VirtualNode.TlsValidationContextTrust}
 */
export interface AppMeshVirtualNodeTlsValidationContextTrust {
  SDS?: AppMeshVirtualNodeTlsValidationContextSdsTrust;
  ACM?: AppMeshVirtualNodeTlsValidationContextAcmTrust;
  File?: AppMeshVirtualNodeTlsValidationContextFileTrust;
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.VirtualNodeConnectionPool
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualnodeconnectionpool.html | AWS::AppMesh::VirtualNode.VirtualNodeConnectionPool}
 */
export interface AppMeshVirtualNodeVirtualNodeConnectionPool {
  TCP?: AppMeshVirtualNodeVirtualNodeTcpConnectionPool;
  HTTP2?: AppMeshVirtualNodeVirtualNodeHttp2ConnectionPool;
  HTTP?: AppMeshVirtualNodeVirtualNodeHttpConnectionPool;
  GRPC?: AppMeshVirtualNodeVirtualNodeGrpcConnectionPool;
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.VirtualNodeGrpcConnectionPool
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualnodegrpcconnectionpool.html | AWS::AppMesh::VirtualNode.VirtualNodeGrpcConnectionPool}
 */
export interface AppMeshVirtualNodeVirtualNodeGrpcConnectionPool {
  MaxRequests: number;
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.VirtualNodeHttp2ConnectionPool
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualnodehttp2connectionpool.html | AWS::AppMesh::VirtualNode.VirtualNodeHttp2ConnectionPool}
 */
export interface AppMeshVirtualNodeVirtualNodeHttp2ConnectionPool {
  MaxRequests: number;
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.VirtualNodeHttpConnectionPool
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualnodehttpconnectionpool.html | AWS::AppMesh::VirtualNode.VirtualNodeHttpConnectionPool}
 */
export interface AppMeshVirtualNodeVirtualNodeHttpConnectionPool {
  MaxConnections: number;
  MaxPendingRequests?: number;
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.VirtualNodeSpec
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualnodespec.html | AWS::AppMesh::VirtualNode.VirtualNodeSpec}
 */
export interface AppMeshVirtualNodeVirtualNodeSpec {
  Logging?: AppMeshVirtualNodeLogging;
  Backends?: any[];
  Listeners?: any[];
  BackendDefaults?: AppMeshVirtualNodeBackendDefaults;
  ServiceDiscovery?: AppMeshVirtualNodeServiceDiscovery;
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.VirtualNodeTcpConnectionPool
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualnodetcpconnectionpool.html | AWS::AppMesh::VirtualNode.VirtualNodeTcpConnectionPool}
 */
export interface AppMeshVirtualNodeVirtualNodeTcpConnectionPool {
  MaxConnections: number;
}
/**
 * Type definition for AWS::AppMesh::VirtualNode.VirtualServiceBackend
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualservicebackend.html | AWS::AppMesh::VirtualNode.VirtualServiceBackend}
 */
export interface AppMeshVirtualNodeVirtualServiceBackend {
  ClientPolicy?: AppMeshVirtualNodeClientPolicy;
  VirtualServiceName: string;
}
/**
 * Type definition for AWS::AppMesh::VirtualRouter.PortMapping
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualrouter-portmapping.html | AWS::AppMesh::VirtualRouter.PortMapping}
 */
export interface AppMeshVirtualRouterPortMapping {
  Port: number;
  Protocol: string;
}
/**
 * Type definition for AWS::AppMesh::VirtualRouter.VirtualRouterListener
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualrouter-virtualrouterlistener.html | AWS::AppMesh::VirtualRouter.VirtualRouterListener}
 */
export interface AppMeshVirtualRouterVirtualRouterListener {
  PortMapping: AppMeshVirtualRouterPortMapping;
}
/**
 * Type definition for AWS::AppMesh::VirtualRouter.VirtualRouterSpec
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualrouter-virtualrouterspec.html | AWS::AppMesh::VirtualRouter.VirtualRouterSpec}
 */
export interface AppMeshVirtualRouterVirtualRouterSpec {
  Listeners: any[];
}
/**
 * Type definition for AWS::AppMesh::VirtualService.VirtualNodeServiceProvider
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualservice-virtualnodeserviceprovider.html | AWS::AppMesh::VirtualService.VirtualNodeServiceProvider}
 */
export interface AppMeshVirtualServiceVirtualNodeServiceProvider {
  VirtualNodeName: string;
}
/**
 * Type definition for AWS::AppMesh::VirtualService.VirtualRouterServiceProvider
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualservice-virtualrouterserviceprovider.html | AWS::AppMesh::VirtualService.VirtualRouterServiceProvider}
 */
export interface AppMeshVirtualServiceVirtualRouterServiceProvider {
  VirtualRouterName: string;
}
/**
 * Type definition for AWS::AppMesh::VirtualService.VirtualServiceProvider
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualservice-virtualserviceprovider.html | AWS::AppMesh::VirtualService.VirtualServiceProvider}
 */
export interface AppMeshVirtualServiceVirtualServiceProvider {
  VirtualNode?: AppMeshVirtualServiceVirtualNodeServiceProvider;
  VirtualRouter?: AppMeshVirtualServiceVirtualRouterServiceProvider;
}
/**
 * Type definition for AWS::AppMesh::VirtualService.VirtualServiceSpec
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualservice-virtualservicespec.html | AWS::AppMesh::VirtualService.VirtualServiceSpec}
 */
export interface AppMeshVirtualServiceVirtualServiceSpec {
  Provider?: AppMeshVirtualServiceVirtualServiceProvider;
}
/**
 * Type definition for AWS::AppMesh::GatewayRoute
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html | AWS::AppMesh::GatewayRoute}
 */
export interface AppMeshGatewayRouteProps {
  MeshName: string;
  VirtualGatewayName: string;
  MeshOwner?: string;
  GatewayRouteName?: string;
  Spec: AppMeshGatewayRouteGatewayRouteSpec;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::AppMesh::GatewayRoute
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html | AWS::AppMesh::GatewayRoute}
 */
export interface AppMeshGatewayRouteAttribs {
  Uid?: string;
  MeshName?: string;
  VirtualGatewayName?: string;
  MeshOwner?: string;
  ResourceOwner?: string;
  GatewayRouteName?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::AppMesh::GatewayRoute
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html | AWS::AppMesh::GatewayRoute}
 */
export class AppMeshGatewayRoute extends ResourceBase<
  "AWS::AppMesh::GatewayRoute",
  AppMeshGatewayRouteProps,
  AppMeshGatewayRouteAttribs
> {
  public static readonly Type = "AWS::AppMesh::GatewayRoute";
  public static readonly AttributeNames: readonly (keyof AppMeshGatewayRouteAttribs)[] =
    [
      "Uid",
      "MeshName",
      "VirtualGatewayName",
      "MeshOwner",
      "ResourceOwner",
      "GatewayRouteName",
      "Arn",
    ];
  constructor(
    logicalId: string,
    properties: AppMeshGatewayRouteProps,
    options?: ResourceOptions,
  ) {
    super(
      AppMeshGatewayRoute.Type,
      AppMeshGatewayRoute.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppMesh::Mesh
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-mesh.html | AWS::AppMesh::Mesh}
 */
export interface AppMeshMeshProps {
  MeshName?: string;
  Spec?: AppMeshMeshMeshSpec;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::AppMesh::Mesh
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-mesh.html | AWS::AppMesh::Mesh}
 */
export interface AppMeshMeshAttribs {
  Uid?: string;
  MeshName?: string;
  MeshOwner?: string;
  ResourceOwner?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::AppMesh::Mesh
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-mesh.html | AWS::AppMesh::Mesh}
 */
export class AppMeshMesh extends ResourceBase<
  "AWS::AppMesh::Mesh",
  AppMeshMeshProps,
  AppMeshMeshAttribs
> {
  public static readonly Type = "AWS::AppMesh::Mesh";
  public static readonly AttributeNames: readonly (keyof AppMeshMeshAttribs)[] =
    ["Uid", "MeshName", "MeshOwner", "ResourceOwner", "Arn"];
  constructor(
    logicalId: string,
    properties: AppMeshMeshProps,
    options?: ResourceOptions,
  ) {
    super(
      AppMeshMesh.Type,
      AppMeshMesh.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppMesh::Route
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-route.html | AWS::AppMesh::Route}
 */
export interface AppMeshRouteProps {
  MeshName: string;
  VirtualRouterName: string;
  MeshOwner?: string;
  RouteName?: string;
  Spec: AppMeshRouteRouteSpec;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::AppMesh::Route
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-route.html | AWS::AppMesh::Route}
 */
export interface AppMeshRouteAttribs {
  Uid?: string;
  MeshName?: string;
  VirtualRouterName?: string;
  MeshOwner?: string;
  ResourceOwner?: string;
  RouteName?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::AppMesh::Route
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-route.html | AWS::AppMesh::Route}
 */
export class AppMeshRoute extends ResourceBase<
  "AWS::AppMesh::Route",
  AppMeshRouteProps,
  AppMeshRouteAttribs
> {
  public static readonly Type = "AWS::AppMesh::Route";
  public static readonly AttributeNames: readonly (keyof AppMeshRouteAttribs)[] =
    [
      "Uid",
      "MeshName",
      "VirtualRouterName",
      "MeshOwner",
      "ResourceOwner",
      "RouteName",
      "Arn",
    ];
  constructor(
    logicalId: string,
    properties: AppMeshRouteProps,
    options?: ResourceOptions,
  ) {
    super(
      AppMeshRoute.Type,
      AppMeshRoute.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppMesh::VirtualGateway
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html | AWS::AppMesh::VirtualGateway}
 */
export interface AppMeshVirtualGatewayProps {
  VirtualGatewayName?: string;
  MeshName: string;
  MeshOwner?: string;
  Spec: AppMeshVirtualGatewayVirtualGatewaySpec;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::AppMesh::VirtualGateway
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html | AWS::AppMesh::VirtualGateway}
 */
export interface AppMeshVirtualGatewayAttribs {
  Uid?: string;
  VirtualGatewayName?: string;
  MeshName?: string;
  MeshOwner?: string;
  ResourceOwner?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::AppMesh::VirtualGateway
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html | AWS::AppMesh::VirtualGateway}
 */
export class AppMeshVirtualGateway extends ResourceBase<
  "AWS::AppMesh::VirtualGateway",
  AppMeshVirtualGatewayProps,
  AppMeshVirtualGatewayAttribs
> {
  public static readonly Type = "AWS::AppMesh::VirtualGateway";
  public static readonly AttributeNames: readonly (keyof AppMeshVirtualGatewayAttribs)[] =
    [
      "Uid",
      "VirtualGatewayName",
      "MeshName",
      "MeshOwner",
      "ResourceOwner",
      "Arn",
    ];
  constructor(
    logicalId: string,
    properties: AppMeshVirtualGatewayProps,
    options?: ResourceOptions,
  ) {
    super(
      AppMeshVirtualGateway.Type,
      AppMeshVirtualGateway.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppMesh::VirtualNode
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html | AWS::AppMesh::VirtualNode}
 */
export interface AppMeshVirtualNodeProps {
  MeshName: string;
  MeshOwner?: string;
  Spec: AppMeshVirtualNodeVirtualNodeSpec;
  VirtualNodeName?: string;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::AppMesh::VirtualNode
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html | AWS::AppMesh::VirtualNode}
 */
export interface AppMeshVirtualNodeAttribs {
  Uid?: string;
  MeshName?: string;
  MeshOwner?: string;
  ResourceOwner?: string;
  Arn?: string;
  VirtualNodeName?: string;
}
/**
 * Resource class for AWS::AppMesh::VirtualNode
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html | AWS::AppMesh::VirtualNode}
 */
export class AppMeshVirtualNode extends ResourceBase<
  "AWS::AppMesh::VirtualNode",
  AppMeshVirtualNodeProps,
  AppMeshVirtualNodeAttribs
> {
  public static readonly Type = "AWS::AppMesh::VirtualNode";
  public static readonly AttributeNames: readonly (keyof AppMeshVirtualNodeAttribs)[] =
    ["Uid", "MeshName", "MeshOwner", "ResourceOwner", "Arn", "VirtualNodeName"];
  constructor(
    logicalId: string,
    properties: AppMeshVirtualNodeProps,
    options?: ResourceOptions,
  ) {
    super(
      AppMeshVirtualNode.Type,
      AppMeshVirtualNode.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppMesh::VirtualRouter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualrouter.html | AWS::AppMesh::VirtualRouter}
 */
export interface AppMeshVirtualRouterProps {
  MeshName: string;
  VirtualRouterName?: string;
  MeshOwner?: string;
  Spec: AppMeshVirtualRouterVirtualRouterSpec;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::AppMesh::VirtualRouter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualrouter.html | AWS::AppMesh::VirtualRouter}
 */
export interface AppMeshVirtualRouterAttribs {
  Uid?: string;
  MeshName?: string;
  VirtualRouterName?: string;
  MeshOwner?: string;
  ResourceOwner?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::AppMesh::VirtualRouter
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualrouter.html | AWS::AppMesh::VirtualRouter}
 */
export class AppMeshVirtualRouter extends ResourceBase<
  "AWS::AppMesh::VirtualRouter",
  AppMeshVirtualRouterProps,
  AppMeshVirtualRouterAttribs
> {
  public static readonly Type = "AWS::AppMesh::VirtualRouter";
  public static readonly AttributeNames: readonly (keyof AppMeshVirtualRouterAttribs)[] =
    [
      "Uid",
      "MeshName",
      "VirtualRouterName",
      "MeshOwner",
      "ResourceOwner",
      "Arn",
    ];
  constructor(
    logicalId: string,
    properties: AppMeshVirtualRouterProps,
    options?: ResourceOptions,
  ) {
    super(
      AppMeshVirtualRouter.Type,
      AppMeshVirtualRouter.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
/**
 * Type definition for AWS::AppMesh::VirtualService
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualservice.html | AWS::AppMesh::VirtualService}
 */
export interface AppMeshVirtualServiceProps {
  MeshName: string;
  MeshOwner?: string;
  VirtualServiceName: string;
  Spec: AppMeshVirtualServiceVirtualServiceSpec;
  Tags?: Tag[];
}
/**
 * Attributes type definition for AWS::AppMesh::VirtualService
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualservice.html | AWS::AppMesh::VirtualService}
 */
export interface AppMeshVirtualServiceAttribs {
  Uid?: string;
  MeshName?: string;
  MeshOwner?: string;
  ResourceOwner?: string;
  VirtualServiceName?: string;
  Arn?: string;
}
/**
 * Resource class for AWS::AppMesh::VirtualService
 *
 * @see {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualservice.html | AWS::AppMesh::VirtualService}
 */
export class AppMeshVirtualService extends ResourceBase<
  "AWS::AppMesh::VirtualService",
  AppMeshVirtualServiceProps,
  AppMeshVirtualServiceAttribs
> {
  public static readonly Type = "AWS::AppMesh::VirtualService";
  public static readonly AttributeNames: readonly (keyof AppMeshVirtualServiceAttribs)[] =
    [
      "Uid",
      "MeshName",
      "MeshOwner",
      "ResourceOwner",
      "VirtualServiceName",
      "Arn",
    ];
  constructor(
    logicalId: string,
    properties: AppMeshVirtualServiceProps,
    options?: ResourceOptions,
  ) {
    super(
      AppMeshVirtualService.Type,
      AppMeshVirtualService.AttributeNames,
      logicalId,
      properties,
      options,
    );
  }
}
