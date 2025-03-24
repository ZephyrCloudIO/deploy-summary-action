import persist from 'node-persist';
import { homedir } from 'node:os';
import { join } from 'node:path';

export interface Deployed {
  app: string;
  url: string;
}

export const getDeployVersionUrl = async (
  application_uid: string,
): Promise<string | undefined> => {
  const deployed = await getDeployedApps();

  return deployed.find(({ app }) => app === application_uid)?.url;
};

const getDeployedApps = async (): Promise<Deployed[]> => {
  await persist.init({ dir: join(homedir(), '.zephyr') });

  const deployed: Deployed[] = [];
  await persist.forEach(async ({ key, value }) => {
    if (!key.startsWith('ze-app-deploy-result:')) return;
    deployed.push({ app: key.split(':')[1].split('.')[0], url: value.urls[0] });
  });
  deployed.sort((a, b) => (a.app > b.app ? 1 : -1));

  return deployed;
};
