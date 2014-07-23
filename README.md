# package-json-flatten

[![NPM version](https://badge.fury.io/js/package-json-flatten.svg)](http://badge.fury.io/js/package-json-flatten)
[![Build Status](https://travis-ci.org/okuryu/package-json-flatten.svg?branch=master)](https://travis-ci.org/okuryu/package-json-flatten)
[![Dependency Status](https://gemnasium.com/okuryu/package-json-flatten.svg)](https://gemnasium.com/okuryu/package-json-flatten)

Tools flatten package.json format.

## Getting Started

Install to using NPM.

```
$ npm install -g package-json-flatten
```

The `package-json-flatten` command should be available right now.

```
$ package-json-flatten -h

Usage: node package-json-flatten [options]

Options:
   -f FILE, --file FILE   Path to package.json file  [package.json]

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

It will finds the package.json file in the current directory in default and reformat it based on order the [NPM official package.json reference](https://www.npmjs.org/doc/package.json.html).

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

* [Ryuichi Okumura](http://www.okuryu.com/)

## License

This module is available under the [BSD license](LICENSE.md).

* The [nomnom](https://github.com/harthur/nomnom) module is available under the MIT License.
* The [detect-indent](https://github.com/sindresorhus/detect-indent) module is available under the MIT License.
