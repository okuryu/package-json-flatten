/**
 * Copyright (c) 2014, Ryuichi Okumura. All rights reserved.
 * Code licensed under the BSD License:
 * https://github.com/okuryu/package-json-flatten/blob/master/LICENSE.md
 */
"use strict";

/**
 * Based on order of the npm official package.json reference.
 * https://docs.npmjs.com/files/package.json
 */
var priorityKeys = [
    "name",
    "version",
    "description",
    "keywords",
    "homepage",
    "bugs",
    "license",
    "author",
    "contributors",
    "files",
    "main",
    "bin",
    "man",
    "directories",
    "repository",
    "scripts",
    "config",
    "dependencies",
    "devDependencies",
    "bundledDependencies",
    "optionalDependencies",
    "engines",
    "engineStrict",
    "os",
    "cpu",
    "preferGlobal",
    "private",
    "publishConfig"
];

export default function (inputData) {
    var flattenData = {},
        formerKey;

    priorityKeys.forEach(function (key) {
        if (inputData.hasOwnProperty(key)) {
            flattenData[key] = inputData[key];
            delete inputData[key];
        }
    });

    for (formerKey in inputData) {
        if (inputData.hasOwnProperty(formerKey)) {
            flattenData[formerKey] = inputData[formerKey];
        }
    }

    return flattenData;
}
