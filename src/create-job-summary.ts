import { summary } from '@actions/core';
import { Context } from '@actions/github/lib/context';

export interface CreateJobSummaryParams {
  appName: string;
  orgName: string;
  repoName: string;
  version_url: string;
  context: Context
}

export const createJobSummary = async ({appName, repoName, orgName, version_url, context}: CreateJobSummaryParams) => {
  await summary.addRaw(`Deployed ${appName}!`);
  await summary.addEOL();

  const tableData = [
    [{ data: 'Application'}, { data: appName}],
    [{ data: 'Project'}, { data: repoName}],
    [{ data: 'Organization'}, { data: orgName}],
    [{ data: 'Version URL' }, { data: `<a class="external" href=${version_url} target="_blank">${version_url}</a>` }],
  ]
  await summary.addTable(tableData).write();
};

interface Commit {
  author: {
    name: string;
    email: string;
    username: string;
  };
  committer: {
    name: string;
    email: string;
    username: string;
  };
  message: string;
  id: string;
  timestamp: string;
}
