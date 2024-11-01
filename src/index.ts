import { getInput, setOutput, setFailed, summary } from '@actions/core';
import { context, getOctokit } from '@actions/github';

type Octokit = ReturnType<typeof getOctokit>;

try {
  const createJobSummary = async (appName: string, version_url: string) => {
    await summary.addRaw(`Deployed ${appName}!`);
    await summary.addEOL();;
    const tableData = [
      [{ data: 'App Name'}, { data: appName}],
      [{ data: 'Version URL' }, { data: version_url}],
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

  (async () => {
    const application_uid = getInput('application_uid');
    const isProduction = getInput('is_production') === 'true';
    const gitHubToken = getInput('github_token');
    const environment = getInput('environment') ?? 'preview';
    const application_uid_parts = application_uid.split('.');
    const appName = application_uid_parts[0];
    const version_url = 'https://example.com';

    console.log(`Deploying ${appName} to ${environment} environment`);
    
    // let gitHubDeployment: Awaited<ReturnType<typeof createGitHubDeployment>>;

    // if (gitHubToken) {
    //   console.log('Creating GitHub deployment');
    //   const octokit = getOctokit(gitHubToken);
    //   gitHubDeployment = await createGitHubDeployment(octokit, isProduction, appName);
    // }

    setOutput('version_url', version_url);
    const payload = JSON.stringify(context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);

    await createJobSummary(appName, version_url);

    // if (gitHubDeployment) {
    //   console.log('Creating GitHub deployment status');
    //   const octokit = getOctokit(gitHubToken);
    //   await createGitHubDeploymentStatus({
    //     id: gitHubDeployment.id,
    //     environmentName: environment,
    //     productionEnvironment: isProduction,
    //     octokit,
    //   });
    // }
  })();
} catch (error) {
  setFailed(error.message);
}