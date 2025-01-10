import { context, getOctokit } from '@actions/github';
import { env } from 'process';

interface CreateDeploySummaryProps {
  gitHubToken: string;
  version_url: string;
  appName: string;
}

export const createDeploySummary = async ({
  appName,
  gitHubToken,
  version_url,
}: CreateDeploySummaryProps) => {
  const octokit = getOctokit(gitHubToken);
  const githubBranch = env.GITHUB_HEAD_REF || env.GITHUB_REF_NAME;
  const commonParams = {
    owner: context.repo.owner,
    repo: context.repo.repo,
    description: 'Zephyr Cloud Deployment',
    environment: appName,
  };
  const deployment = await octokit.rest.repos.createDeployment({
    ...commonParams,
    ref: githubBranch || context.ref,
    auto_merge: false,
    required_contexts: [],
  });

  if ('id' in deployment.data) {
    await octokit.rest.repos.createDeploymentStatus({
      ...commonParams,
      deployment_id: deployment.data.id,
      environment_url: version_url,
      state: 'success',
      auto_inactive: false,
    });
  }
};
