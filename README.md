# Why? [![Build Status](https://travis-ci.org/Travelport-Ukraine/npm-module-boilerplate.svg?branch=master)](https://travis-ci.org/Travelport-Ukraine/npm-module-boilerplate)
:page_with_curl: Boilerplate for npm/node module. Write with ES6 - have compatibility with all node versions.

This boilerplate is for people who want write code using all ES6 features ( and stage-2 ) but also want/need backward compatibility with old node versions. 

# Node version

This boilerplate uses `babel-preset-env`. Supported `node` version can be defined in `.babelrc`. 

# Features
* Build with [Babel](https://babeljs.io). (ES6 -> ES5)
* Test with [mocha](https://mochajs.org).
* Cover with [istanbul](https://github.com/gotwarlost/istanbul).
* Check with [eslint](eslint.org).
* Deploy with [Travis](travis-ci.org).

# Commands
- `npm run clean` - Remove `lib/` directory
- `npm test` - Run tests. Tests can be written with ES6 (WOW!)
- `npm test:watch` - You can even re-run tests on file changes!
- `npm run cover` - Yes. You can even cover ES6 code.
- `npm run lint` - We recommend using [airbnb-config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb). It's fantastic.
- `npm run test:examples` - We recommend writing examples on pure JS for better understanding module usage.
- `npm run build` - Do some magic with ES6 to create ES5 code.
- `npm run prepublish` - Hook for npm. Do all the checks before publishing you module.

# Installation
Just clone this repo and remove `.git` folder.

