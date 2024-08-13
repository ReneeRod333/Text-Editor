import { openDB } from 'idb';
const DBNAME = 'jate';
// const STORENAME = 'content';

const initdb = async () =>
  openDB(DBNAME, 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains(DBNAME)) {
        console.log(`${DBNAME} database already exists`);
        return;
      }
      db.createObjectStore(DBNAME, { keyPath: 'id', autoIncrement: true });
      console.log(`${DBNAME} database created`);
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  if (typeof content !== 'string') {
    throw new TypeError('Content must be a string');
  }
  const db = await openDB(DBNAME, 1);
  await db.put(DBNAME, { content });
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const db = await openDB(DBNAME, 1);
  const result = await db.getAll(DBNAME);
  console.log('data retrieved from the database', result);
  return result;
};

initdb();
