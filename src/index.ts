import { getInput, setOutput, setFailed, summary } from '@actions/core';
import { context, getOctokit } from '@actions/github';

try {
  const createJobSummary = async (nameToGreet: string, time: string, payload: string) => {
    await summary.addRaw(`Hello ${nameToGreet}!`);
    await summary.addEOL();;
    const tableData = [
      [{ data: 'Name to Great'}, { data: nameToGreet}],
      [{ data: 'Time'}, { data: time}],
      [{ data: 'Payload' }, { data: payload}],
    ]
    await summary.addTable(tableData).write();
  };

  (async () => {
    // `who-to-greet` input defined in action metadata file
    const nameToGreet = getInput('who-to-greet');
    console.log(`Hello ${nameToGreet}!`);
    const time = (new Date()).toTimeString();
    setOutput("time", time);
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
    await createJobSummary(nameToGreet, time, payload);
  })();
} catch (error) {
  setFailed(error.message);
}