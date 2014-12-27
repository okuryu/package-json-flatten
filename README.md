# package-json-flatten

[![npm Version][npm Version Badge]][npm Version]
[![Build Status][Build Status Badge]][Build Status]
[![Dependency Status][Dependency Status Badge]][Dependency Status]
[![Coverage Status][Coverage Status Badge]][Coverage Status]

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

It will finds the package.json file in the current directory in default and reformat it based on order the [npm official package.json reference][package.json docs].

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

* Ryuichi Okumura ([@okuryu])

## License

This module is licensed under the [BSD license](LICENSE).

* [nomnom] is licensed under the MIT License.
* [detect-indent] is licensed under the MIT License.

[npm Version Badge]: https://img.shields.io/npm/v/package-json-flatten.svg?style=flat-square
[npm Version]: https://www.npmjs.com/package/package-json-flatten
[Build Status Badge]: http://img.shields.io/travis/okuryu/package-json-flatten.svg?style=flat-square
[Build Status]: https://travis-ci.org/okuryu/package-json-flatten
[Dependency Status Badge]: https://img.shields.io/gemnasium/okuryu/package-json-flatten.svg?style=flat-square
[Dependency Status]: https://gemnasium.com/okuryu/package-json-flatten
[Coverage Status Badge]: https://img.shields.io/coveralls/okuryu/package-json-flatten.svg?style=flat-square
[Coverage Status]: https://coveralls.io/r/okuryu/package-json-flatten?branch=master
[package.json docs]: https://docs.npmjs.com/files/package.json
[@okuryu]: https://github.com/okuryu
[nomnom]: https://github.com/harthur/nomnom
[detect-indent]: https://github.com/sindresorhus/detect-indent
