import * as fs from 'node:fs';
import * as path from 'node:path';
import { homedir } from 'node:os';

const ZEPHYR_FOLDER = '.zephyr';

export const showZephyrCache = async () => {
  const dirPath = path.resolve(homedir(), ZEPHYR_FOLDER);
  console.log('Zephyr cache in %s:', dirPath);
  fs.readdirSync(dirPath).forEach(file => {
    console.log(file);
  });
};