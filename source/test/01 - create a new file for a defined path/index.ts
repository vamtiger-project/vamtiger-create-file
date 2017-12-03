import { resolve as resolvePath } from 'path';
import { expect } from 'chai';
import createFile from '../..';
import getDirectoryContent from 'vamtiger-get-directory-content';

describe('vamtiger-create-file should', function () {
    it('create a new file for a defined path', async function () {
        const fileName = 'new-file.ts';
        const newFilePath = resolvePath(
            __dirname,
            fileName
        );
        const fileData = `export default '${new Date()}';`;
        const create = await createFile(newFilePath, fileData);
        const directoryContent = await getDirectoryContent(__dirname);
        const result = new Set(directoryContent).has(fileName);
        
        expect(result).to.be.ok;
    });
})