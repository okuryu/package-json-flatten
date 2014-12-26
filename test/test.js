/**
 * Copyright (c) 2014, Ryuichi Okumura. All rights reserved.
 * Code licensed under the BSD License:
 * https://github.com/okuryu/package-json-flatten/blob/master/LICENSE
 */
/*global describe, it*/
"use strict";

var flatten = require("../dist/flatten"),
    expect = require("chai").expect;

describe("Basic Test", function () {
    it("flatten normal data", function () {
        var data = {
                description: "Test Data",
                version: "0.0.1",
                name: "Test Data"
            },
            expectedData = {
                name: "Test Data",
                version: "0.0.1",
                description: "Test Data"
            },
            flattenedData = flatten(data);
        expect(JSON.stringify(flattenedData)).to.be.equal(JSON.stringify(expectedData));
    });
    it("flatten extended data", function () {
        var data = {
                yahoo: {},
                description: "Test Data",
                version: "0.0.1",
                name: "Test Data"
            },
            expectedData = {
                name: "Test Data",
                version: "0.0.1",
                description: "Test Data",
                yahoo: {}
            },
            flattenedData = flatten(data);
        expect(JSON.stringify(flattenedData)).to.be.equal(JSON.stringify(expectedData));
    });
    it("flatten data contains keywords", function () {
        var data = {
                keywords: [
                    "foo",
                    "bar"
                ],
                description: "Test Data",
                version: "0.0.1",
                name: "Test Data"
            },
            expectedData = {
                name: "Test Data",
                version: "0.0.1",
                description: "Test Data",
                keywords: [
                    "bar",
                    "foo"
                ]
            },
            flattenedData = flatten(data);
        expect(JSON.stringify(flattenedData)).to.be.equal(JSON.stringify(expectedData));
    });
    it("flatten data contains files", function () {
        var data = {
                files: [
                    "foo",
                    "bar"
                ],
                description: "Test Data",
                version: "0.0.1",
                name: "Test Data"
            },
            expectedData = {
                name: "Test Data",
                version: "0.0.1",
                description: "Test Data",
                files: [
                    "bar",
                    "foo"
                ]
            },
            flattenedData = flatten(data);
        expect(JSON.stringify(flattenedData)).to.be.equal(JSON.stringify(expectedData));
    });
});
