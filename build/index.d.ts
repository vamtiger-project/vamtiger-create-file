/// <reference types="node" />
/// <reference types="bluebird" />
import { writeFile } from 'fs';
import * as Promise from 'bluebird';
export declare type test = typeof writeFile;
export declare type VamtigerFile = string;
export declare type VamtigerFileData = string;
export declare type VamtigerFileOptions = string | IVamtigerOptions;
export interface IVamtigerOptions {
    encoding?: string | null;
    mode?: number;
    flag?: string;
}
export declare type VamtigerCreateFile = (path: VamtigerFile, data?: VamtigerFileData, options?: VamtigerFileOptions) => Promise<void>;
declare const _default: (path: string, data?: string | undefined, options?: string | IVamtigerOptions | undefined) => Promise<void>;
export default _default;
