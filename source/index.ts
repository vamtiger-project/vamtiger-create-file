import { writeFile } from 'fs';
import { promisify } from 'util';
import * as bluebird from 'bluebird';

const createFile = promisify && promisify(writeFile) || bluebird.promisify(writeFile);

export default createFile;