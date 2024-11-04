import { context } from '@actions/github';
import { Octokit } from './types';

export  const createGitHubDeploymentStatus = async ({
		id,
		environmentName,
		productionEnvironment,
		octokit,
	}: {
		octokit: Octokit;
		id: number;
		environmentName: string;
		productionEnvironment: boolean;
	}) => {
		await octokit.rest.repos.createDeploymentStatus({
			owner: context.repo.owner,
			repo: context.repo.repo,
			deployment_id: id,
			environment: environmentName,
			production_environment: productionEnvironment,
			description: 'Zephyr Deployment',
			state: 'success',
			auto_inactive: false,
		});
	};
  