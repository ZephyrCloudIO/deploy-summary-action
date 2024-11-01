import { getInput, setOutput, setFailed, summary } from '@actions/core';
import { context, getOctokit } from '@actions/github';

type Octokit = ReturnType<typeof getOctokit>;

try {
  const createJobSummary = async (appName: string, payload: string) => {
    await summary.addRaw(`Deployed ${appName}!`);
    await summary.addEOL();;
    const tableData = [
      [{ data: 'App Name'}, { data: appName}],
      [{ data: 'Payload' }, { data: payload}],
    ]
    await summary.addTable(tableData).write();
  };

	const createGitHubDeployment = async (octokit: Octokit, isProductionEnvironment: boolean, environment: string) => {
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

  const createGitHubDeploymentStatus = async ({
		id,
		url,
		versionUrl,
		environmentName,
		productionEnvironment,
		octokit,
	}: {
		octokit: Octokit;
		id: number;
		url: string;
		versionUrl: string;
		environmentName: string;
		productionEnvironment: boolean;
	}) => {
		await octokit.rest.repos.createDeploymentStatus({
			owner: context.repo.owner,
			repo: context.repo.repo,
			deployment_id: id,
			environment: environmentName,
			environment_url: url,
			production_environment: productionEnvironment,
			target_url: versionUrl,
			description: 'Zephyr Deployment',
			state: 'success',
			auto_inactive: false,
		});
	};

  (async () => {
    const application_uid = getInput('application_uid');
    const isProduction = getInput('is_production') === 'true';
    const gitHubToken = getInput('github_token');
    const environment = getInput('environment') ?? 'preview';
    const application_uid_parts = application_uid.split('.');
    const appName = application_uid_parts[0];
    
    let gitHubDeployment: Awaited<ReturnType<typeof createGitHubDeployment>>;

    if (gitHubToken) {
      const octokit = getOctokit(gitHubToken);
      gitHubDeployment = await createGitHubDeployment(octokit, isProduction, appName);
    }

    setOutput('version_url', 'https://example.com');
    const payload = JSON.stringify(context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);

    await createJobSummary(appName, payload);

    if (gitHubDeployment) {
      const octokit = getOctokit(gitHubToken);
      await createGitHubDeploymentStatus({
      id: gitHubDeployment.id,
      url: 'https://example.com',
      versionUrl: 'https://example.com',
      environmentName: environment,
      productionEnvironment: isProduction,
      octokit,
    });
    }
  })();
} catch (error) {
  setFailed(error.message);
}