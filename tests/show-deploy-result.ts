import { getDeployVersionUrl } from '../src/get-deploy-version-url';
const application_uid = 'default_webpack_mf_first.zephyr-ci.opavlovskyi';

(async () => {
  const version_url = await getDeployVersionUrl(application_uid);

  console.log(`Version URL: ${version_url}`);
})();
