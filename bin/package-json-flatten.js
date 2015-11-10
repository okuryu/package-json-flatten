#!/usr/bin/env node
/**
 * Copyright (c) 2014, Ryuichi Okumura. All rights reserved.
 * Code licensed under the BSD License:
 * https://github.com/okuryu/package-json-flatten/blob/master/LICENSE.md
 */
var cli = require("../dist/cli");

cli(require("nomnom")
    .options({
        file: {
            abbr: "f",
            default: "package.json",
            metavar: "FILE",
            help: "Path to package.json file"
        },
        indent: {
            abbr: "i",
            default: 2,
            metavar: "INDENT",
            help: "Number of whitespace to indent"
        }
    })
    .nocolors()
    .parse());
