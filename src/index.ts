import { getInput, setOutput, setFailed } from '@actions/core';
import { context } from '@actions/github';
import { createJobSummary } from './create-job-summary';
import { getDeployVersionUrl } from './get-deploy-version-url';

(async () => {
  try {
    const application_uid = getInput('application_uid');
    const [appName, repoName, orgName] = application_uid.split('.');
    const version_url = await getDeployVersionUrl(application_uid);

    if (!version_url) {
      console.log('No version URL found');
      return;
    }

    setOutput('version_url', version_url);
    const payload = JSON.stringify(context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);

    await createJobSummary({appName, repoName, orgName, version_url});

  } catch (error) {
    setFailed(error.message);
  }
})();
