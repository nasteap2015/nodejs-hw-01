import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const getAllContacts = async () => {
  try {
    const result = await fs.readFile(PATH_DB, 'utf8');
    return JSON.parse(result);
  } catch (error) {
    console.log('File reading failed');
  }
};

console.log(await getAllContacts());
