import { getInput, setOutput, setFailed } from '@actions/core';
import { context } from '@actions/github';
import { createJobSummary } from './create-job-summary';
import { getDeployVersionUrl } from './get-deploy-version-url';
import { createDeploySummary } from './create-deploy-summary';

(async () => {
  try {
    const application_uid = getInput('application_uid', { required: true });
    const github_token = getInput('github_token', { required: false });
    const github_environment = getInput('github_environment', { required: false });
    const [appName, repoName, orgName] = application_uid.split('.');
    const version_url = await getDeployVersionUrl(application_uid);

    if (!version_url) {
      console.log('No version URL found');
      return;
    }

    setOutput('version_url', version_url);

    await Promise.allSettled([
      createJobSummary({ appName, repoName, orgName, version_url, context }),
      createDeploySummary({ version_url, github_token, github_environment }),
    ]);
  } catch (error) {
    console.error(error);
    setFailed(error.message);
  }
})();
