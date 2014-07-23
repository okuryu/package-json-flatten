#!/usr/bin/env node
/*
 Copyright (c) 2014, Ryuichi Okumura. All rights reserved.
 Code licensed under the BSD License:
 https://github.com/okuryu/package-json-flatten/blob/master/LICENSE.md
 */
"use strict";

var cli = require("../dist/cli");

cli(require("nomnom")
    .options({
        file: {
            abbr: "f",
            default: "package.json",
            metavar: "FILE",
            help: "Path to package.json file"
        }
    })
    .nocolors()
    .parse());
