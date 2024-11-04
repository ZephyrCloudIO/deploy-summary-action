import { appDeployResultCache } from 'zephyr-edge-contract';

export const getDeployVersionUrl = async (application_uid: string) => {
  const result = await appDeployResultCache.getAppDeployResult(application_uid);
  return result?.urls[0];
};