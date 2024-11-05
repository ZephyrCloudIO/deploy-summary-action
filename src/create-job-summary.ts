import { summary } from '@actions/core';

export interface CreateJobSummaryParams {
  appName: string;
  orgName: string;
  repoName: string;
  version_url: string;
}

export const createJobSummary = async ({appName, repoName, orgName, version_url}: CreateJobSummaryParams) => {
  await summary.addRaw(`Deployed ${appName}!`);
  await summary.addEOL();
  const tableData = [
    [{ data: 'Application'}, { data: appName}],
    [{ data: 'Project'}, { data: repoName}],
    [{ data: 'Organization'}, { data: orgName}],
    [{ data: 'Version URL' }, { data: `<a href=${version_url} target=_blank>${version_url}</a>` }],
  ]
  await summary.addTable(tableData).write();
};