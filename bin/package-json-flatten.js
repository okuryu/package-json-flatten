#!/usr/bin/env node
/**
 * Copyright (c) 2014, Ryuichi Okumura. All rights reserved.
 * Code licensed under the BSD License:
 * https://github.com/okuryu/package-json-flatten/blob/master/LICENSE.md
 */
var cli = require("../dist/cli");
var program = require("commander");

cli(program
  .option(
    "-f, --file [file]",
    "Path to package.json file (default: ./package.json)"
  )
  .option(
    "-i, --indent [indent]",
    "String to indent (default: auto detection from the file or 4 whitespace)"
  )
  .parse(process.argv));
