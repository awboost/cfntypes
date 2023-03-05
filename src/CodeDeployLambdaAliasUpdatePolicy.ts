/**
 * To perform an CodeDeploy deployment when the version changes on an
 * `AWS::Lambda::Alias` resource, use the `CodeDeployLambdaAliasUpdate` update
 * policy.
 *
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html#cfn-attributes-updatepolicy-codedeploylambdaaliasupdate | CodeDeployLambdaAlias Update policy}
 */
export interface CodeDeployLambdaAliasUpdatePolicy {
  /**
   * The name of the Lambda function to run after traffic routing completes.
   */
  AfterAllowTrafficHook?: string;

  /**
   * The name of the CodeDeploy application.
   */
  ApplicationName: string;

  /**
   * The name of the Lambda function to run before traffic routing starts.
   */
  BeforeAllowTrafficHook?: string;

  /**
   * The name of the CodeDeploy deployment group. This is where the
   * traffic-shifting policy is set.
   */
  DeploymentGroupName: string;
}
