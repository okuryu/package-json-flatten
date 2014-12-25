# package-json-flatten

[![npm Version](https://img.shields.io/npm/v/package-json-flatten.svg?style=flat-square)](https://www.npmjs.com/package/package-json-flatten)
[![Build Status](http://img.shields.io/travis/okuryu/package-json-flatten.svg?style=flat-square)](https://travis-ci.org/okuryu/package-json-flatten)
[![Dependency Status](https://img.shields.io/gemnasium/okuryu/package-json-flatten.svg?style=flat-square)](https://gemnasium.com/okuryu/package-json-flatten)
[![Coverage Status](https://img.shields.io/coveralls/okuryu/package-json-flatten.svg?style=flat-square)](https://coveralls.io/r/okuryu/package-json-flatten?branch=master)

Tools flatten package.json format.

## Getting Started

Install to using npm.

```
$ npm install -g package-json-flatten
```

The `package-json-flatten` command should be available right now.

```
$ package-json-flatten -h

Usage: node package-json-flatten [options]

Options:
   -f FILE, --file FILE         Path to package.json file  [package.json]
   -i INDENT, --indent INDENT   Number of whitespace to indent  [2]

```

Here is the example of package.json.

```js
{
  "name": "my-node-project",
  "version": "0.1.0",
  "description": "My Node.js Project",
  "scripts": {
    "test": "grunt"
  },
  "dependencies": {
    "express": "*"
  },
  "main": "index.js",
  "homepage": "http://www.example.com/",
  "author": "Ryuichi Okumura <okuryu@okuryu.com>",
  "repository": {
    "type": "git",
    "url": "http://www.example.com/"
  },
  "devDependencies": {
    "jshint": "*"
  }
}
```

Run `package-json-flatten` command.

```
$ package-json-flatten
```

It will finds the package.json file in the current directory in default and reformat it based on order the [npm official package.json reference](https://docs.npmjs.com/files/package.json).

```js
{
  "name": "my-node-project",
  "version": "0.1.0",
  "description": "My Node.js Project",
  "homepage": "http://www.example.com/",
  "author": "Ryuichi Okumura <okuryu@okuryu.com>",
  "main": "index.js",
  "repository": {
    "type": "git",
    "url": "http://www.example.com/"
  },
  "scripts": {
    "test": "grunt"
  },
  "dependencies": {
    "express": "*"
  },
  "devDependencies": {
    "jshint": "*"
  }
}
```

## Contributing

See the [CONTRIBUTING.md](CONTRIBUTING.md).

## Author

* Ryuichi Okumura ([@okuryu](https://github.com/okuryu))

## License

This module is licensed under the [BSD license](LICENSE).

* [nomnom](https://github.com/harthur/nomnom) is licensed under the MIT License.
* [detect-indent](https://github.com/sindresorhus/detect-indent) is licensed under the MIT License.
