import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const dataArr = JSON.parse(data);
    if (dataArr.length > 0) {
      const result = dataArr.slice(0, dataArr.length - 1);
      await fs.writeFile(PATH_DB, JSON.stringify(result, null, 2), 'utf8');
      console.log('Last contact removed');
    } else {
      console.log('Array is empty');
    }
  } catch (error) {
    console.log('Contact delete failed');
  }
};

removeLastContact();
