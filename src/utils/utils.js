import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.join(path.dirname(__filename), '..');
const __mainDirname = path.join(__dirname, '..');

export{
    __dirname,
    __mainDirname
};