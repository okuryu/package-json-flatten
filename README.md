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

Here is an example of package.json.

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

It finds the package.json file in the current directory in default and reformat it based on order
the [npm official package.json reference][package.json docs].

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

## Options

### -f, --file [file]

An option to pass a path to package.json. It read the package.json in the current directory in
default.

```
$ package-json-flatten -f src/package.json
```

### -i, --indent [indent]

An option to change an indent style of the package.json. It detects indent style from the
package.json and use it, or use default indent style 4 whitespace.

```
$ package-json-flatten -i '  '
```

## Contributing

See the [CONTRIBUTING.md](CONTRIBUTING.md).

## Author

* Ryuichi Okumura ([@okuryu])

## License

package-json-flatten is licensed under the [BSD license](LICENSE).

* [commander] is licensed under the MIT License.
* [detect-indent] is licensed under the MIT License.

[npm Version Badge]: https://img.shields.io/npm/v/package-json-flatten.svg?style=flat-square
[npm Version]: https://www.npmjs.com/package/package-json-flatten
[Build Status Badge]: https://img.shields.io/travis/okuryu/package-json-flatten.svg?style=flat-square
[Build Status]: https://travis-ci.org/okuryu/package-json-flatten
[Dependency Status Badge]: https://img.shields.io/gemnasium/okuryu/package-json-flatten.svg?style=flat-square
[Dependency Status]: https://gemnasium.com/okuryu/package-json-flatten
[Coverage Status Badge]: https://img.shields.io/coveralls/okuryu/package-json-flatten.svg?style=flat-square
[Coverage Status]: https://coveralls.io/r/okuryu/package-json-flatten?branch=master
[package.json docs]: https://docs.npmjs.com/files/package.json
[@okuryu]: https://github.com/okuryu
[commander]: https://github.com/tj/commander.js
[detect-indent]: https://github.com/sindresorhus/detect-indent
