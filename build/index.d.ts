/// <reference types="node" />
import { writeFile } from 'fs';
declare const createFile: typeof writeFile.__promisify__;
export default createFile;
