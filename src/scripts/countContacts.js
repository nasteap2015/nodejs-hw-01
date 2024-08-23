import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const countContacts = async () => {
  try {
    const resultArr = JSON.parse(await fs.readFile(PATH_DB, 'utf8'));
    return `There are ${resultArr.length} contacts in your array`;
  } catch (error) {
    console.log('Reading file failed');
  }
};

console.log(await countContacts());
