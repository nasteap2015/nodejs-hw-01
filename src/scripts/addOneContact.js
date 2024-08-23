import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import * as fs from 'node:fs/promises';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    const generatedData = createFakeContact();
    contacts.push(generatedData);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
    console.log('Contact added to an array');
  } catch (err) {
    console.error('Adding contact failed', err);
  }
};

addOneContact();
