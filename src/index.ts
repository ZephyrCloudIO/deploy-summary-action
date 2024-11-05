import { getInput, setOutput, setFailed } from '@actions/core';
import { context } from '@actions/github';
import { createJobSummary } from './create-job-summary';
import { getDeployVersionUrl } from './get-deploy-version-url';
import { showZephyrCache } from './show-zephyr-cache';

(async () => {
  try {
    const application_uid = getInput('application_uid');
    // const isProduction = getInput('is_production') === 'true';
    // const gitHubToken = getInput('github_token');
    // const environment = getInput('environment') ?? 'preview';
    const [appName, repoName, orgName] = application_uid.split('.');
    const version_url = await getDeployVersionUrl(application_uid);

    if (!version_url) {
      //setFailed('No version URL found');
      showZephyrCache();
      return;
    }
    
    // let gitHubDeployment: Awaited<ReturnType<typeof createGitHubDeployment>>;

    // if (gitHubToken) {
    //   console.log('Creating GitHub deployment');
    //   const octokit = getOctokit(gitHubToken);
    //   gitHubDeployment = await createGitHubDeployment(octokit, isProduction, appName);
    // }

    setOutput('version_url', version_url);
    const payload = JSON.stringify(context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);

    await createJobSummary({appName, repoName, orgName, version_url});

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
  } catch (error) {
    setFailed(error.message);
  }
})();

function lsZephyrCache() {
  console.log('Zephyr cache:');
  
}