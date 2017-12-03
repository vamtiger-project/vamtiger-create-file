import { writeFile } from 'fs';
import * as Promise from 'bluebird';
import { URL } from 'url';

export type test = typeof writeFile;

export type VamtigerFile = string;

export type VamtigerFileData = string;

export type VamtigerFileOptions = string | IVamtigerOptions;

export interface IVamtigerOptions {
    encoding?: string | null;
    mode?: number;
    flag?: string;
}

export type VamtigerCreateFile = (path: VamtigerFile, data?: VamtigerFileData, options?: VamtigerFileOptions) => Promise<void>;

const vamtigerCreateFile = Promise.promisify(writeFile,) as VamtigerCreateFile;

export default (path: VamtigerFile, data?: VamtigerFileData, options?: VamtigerFileOptions) => {
    const fileData = data ? data : '';

    return vamtigerCreateFile(path, fileData, options);
};