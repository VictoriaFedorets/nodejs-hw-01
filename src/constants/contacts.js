import * as path from 'node:path';

// const contactPath = path.join(process.cwd(), 'src', 'db', 'db.json');

export const PATH_DB = path.resolve('src', 'db', 'db.json');
console.log(PATH_DB);
