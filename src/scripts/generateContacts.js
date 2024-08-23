import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import * as fs from 'node:fs/promises';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    for (let i = 1; i <= number; i += 1) {
      const generatedData = createFakeContact();
      contacts.push(generatedData);
    }
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
    console.log(`${number} contacts added to an array`);
  } catch (err) {
    console.error('Adding contacts failed', err);
  }
};

generateContacts(5);
