/**
 * Copyright (c) 2014, Ryuichi Okumura. All rights reserved.
 * Code licensed under the BSD License:
 * https://github.com/okuryu/package-json-flatten/blob/master/LICENSE
 */
import fs from "fs";
import util from "util";
import detectIndent from "detect-indent";
import flatten from "./flatten";

function readPackageJSON(file, callback) {
  var options = {
    encoding: "utf8"
  };

  fs.readFile(file, options, function (err, data) {
    if (err) {
      throw new Error(util.format("Failed to open a file (%s)", file));
    }
    try {
      var indent = detectIndent(data).indent;
      callback(JSON.parse(data), indent);
    } catch (e) {
      throw new Error(util.format("The file isn't JSON format (%s)", file));
    }
  });
}

function getFlattenedData(data) {
  return flatten(data);
}

function writePackageJSON(file, flattenData, indent, callback) {
  var data = JSON.stringify(flattenData, null, indent) + "\n";
  var options = {
    encoding: "utf8"
  };

  fs.writeFile(file, data, options, function (err) {
    if (err) {
      throw new Error(util.format("Failed to write a file (%s)", file));
    }
    callback();
  });
}

export default function (options) {
  try {
    var file = options.file || "package.json";
    var defaultIndent = "    ";
    readPackageJSON(file, function (data, detectedIndent) {
      var flattenedData = getFlattenedData(data);
      var flattenedIndent = options.indent || detectedIndent || defaultIndent;
      writePackageJSON(file, flattenedData, flattenedIndent, function () {
      });
    });
  } catch (e) {
    throw new Error(e.message);
  }
}
