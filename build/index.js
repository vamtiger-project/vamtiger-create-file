"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const Promise = require("bluebird");
const vamtigerCreateFile = Promise.promisify(fs_1.writeFile);
exports.default = (path, data, options) => {
    const fileData = data ? data : '';
    return vamtigerCreateFile(path, fileData, options);
};
//# sourceMappingURL=index.js.map