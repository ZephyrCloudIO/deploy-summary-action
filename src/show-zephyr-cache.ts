import * as fs from 'node:fs';
import * as path from 'node:path';
import { homedir } from 'node:os';

const ZEPHYR_FOLDER = '.zephyr';

export const showZephyrCache = async () => {
  const dirPath = path.resolve(homedir(), ZEPHYR_FOLDER);
  console.log('Zephyr cache in %s:', dirPath);
  const dir = fs.readdirSync(dirPath);
  dir.forEach(file => {
    console.log(file);
  });
  dir.forEach(file => {
    console.log('Reading file "%s"', file);
    const filePath = path.resolve(dirPath, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const json = JSON.parse(content);
    if (json.key?.startsWith('ze-app-deploy-result')) {
      console.log('Deploy result for %s:', json.key);
      console.log(json.value);
    }
  });
};