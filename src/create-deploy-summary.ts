import { context, getOctokit } from '@actions/github';
import { env } from 'process';

interface CreateDeploySummaryProps {
  version_url: string;
  github_token: string;
  github_environment: string | undefined;
}

export const createDeploySummary = async ({
  version_url,
  github_token,
  github_environment,
}: CreateDeploySummaryProps) => {
  const octokit = getOctokit(github_token);
  const githubBranch = env.GITHUB_HEAD_REF || env.GITHUB_REF_NAME;
  const commonParams = {
    owner: context.repo.owner,
    repo: context.repo.repo,
    description: 'Zephyr Cloud Deployment',
    environment: github_environment?.length ? github_environment : 'Zephyr Cloud',
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
