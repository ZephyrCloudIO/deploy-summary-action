import { context } from '@actions/github';
import { Octokit } from './types';

export const createGitHubDeployment = async (octokit: Octokit, isProductionEnvironment: boolean, environment: string) => {
    const githubBranch = process.env.GITHUB_HEAD_REF || process.env.GITHUB_REF_NAME;
    const deployment = await octokit.rest.repos.createDeployment({
			owner: context.repo.owner,
			repo: context.repo.repo,
			ref: githubBranch || context.ref,
			auto_merge: false,
			description: 'Zephyr Deployment',
			required_contexts: [],
			environment,
			production_environment: isProductionEnvironment,
		});

		if (deployment.status === 201) {
			return deployment.data;
		}
	};