import { writeFile } from 'fs';
import { promisify } from 'util';
import * as BlueBird from 'bluebird';

const createFile = promisify && promisify(writeFile) || BlueBird.promisify(writeFile);

export default createFile;