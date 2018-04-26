"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const util_1 = require("util");
const bluebird = require("bluebird");
const createFile = util_1.promisify && util_1.promisify(fs_1.writeFile) || bluebird.promisify(fs_1.writeFile);
exports.default = createFile;
//# sourceMappingURL=index.js.map