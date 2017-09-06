# airbnb-npm-boilerplate <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![Build Status][travis-svg]][travis-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

> An npm package boilerplate.

![airbnb-npm-boilerplate in action](https://raw.githubusercontent.com/xxd3vin/airbnb-npm-boilerplate/master/airbnb-npm-boilerplate-demo.gif)

## Live Playground

For examples of the component in action, go to https://xxd3vin.github.io/airbnb-npm-boilerplate.

OR

To run that demo on your own computer:
* Clone this repository
* `npm install`
* `npm run storybook`
* Visit http://localhost:9001/

## Getting Started
### Install dependencies
Ensure packages are installed with correct version numbers by running:
  ```sh
  (
    export PKG=airbnb-npm-boilerplate;
    npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g; s/ *//g' | xargs npm install --save "$PKG"
  )
  ```

  Which produces and runs a command like:

  ```sh
  npm install --save airbnb-npm-boilerplate react@>=#.## react-dom@>=#.## react-addons-shallow-compare@>=#.##
  ```

[package-url]: https://npmjs.org/package/airbnb-npm-boilerplate
[npm-version-svg]: http://versionbadg.es/xxd3vin/airbnb-npm-boilerplate.svg
[travis-svg]: https://travis-ci.org/xxd3vin/airbnb-npm-boilerplate.svg
[travis-url]: https://travis-ci.org/xxd3vin/airbnb-npm-boilerplate
[deps-svg]: https://david-dm.org/xxd3vin/airbnb-npm-boilerplate.svg
[deps-url]: https://david-dm.org/xxd3vin/airbnb-npm-boilerplate
[dev-deps-svg]: https://david-dm.org/xxd3vin/airbnb-npm-boilerplate/dev-status.svg
[dev-deps-url]: https://david-dm.org/xxd3vin/airbnb-npm-boilerplate#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/airbnb-npm-boilerplate.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/airbnb-npm-boilerplate.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/airbnb-npm-boilerplate.svg
[downloads-url]: http://npm-stat.com/charts.html?package=airbnb-npm-boilerplate
