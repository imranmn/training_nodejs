import path from 'node:path';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const filename = fileURLToPath(import.meta.url);
const dir = path.dirname(filename);

const data = await fs.readFile(dir + '/content.txt', 'utf-8');
console.log(data);