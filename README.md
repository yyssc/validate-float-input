# validate-float-input <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![Build Status][travis-svg]][travis-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

> Validate float number input field.

![validate-float-input in action](https://raw.githubusercontent.com/yyssc/validate-float-input/master/airbnb-npm-boilerplate-demo.gif)

## Live Playground

For examples of the component in action, go to https://yyssc.github.io/validate-float-input.

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
    export PKG=validate-float-input;
    npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g; s/ *//g' | xargs npm install --save "$PKG"
  )
  ```

  Which produces and runs a command like:

  ```sh
  npm install --save validate-float-input react@>=#.## react-dom@>=#.## react-addons-shallow-compare@>=#.##
  ```

[package-url]: https://npmjs.org/package/validate-float-input
[npm-version-svg]: http://versionbadg.es/yyssc/validate-float-input.svg
[travis-svg]: https://travis-ci.org/yyssc/validate-float-input.svg
[travis-url]: https://travis-ci.org/yyssc/validate-float-input
[deps-svg]: https://david-dm.org/yyssc/validate-float-input.svg
[deps-url]: https://david-dm.org/yyssc/validate-float-input
[dev-deps-svg]: https://david-dm.org/yyssc/validate-float-input/dev-status.svg
[dev-deps-url]: https://david-dm.org/yyssc/validate-float-input#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/validate-float-input.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/validate-float-input.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/validate-float-input.svg
[downloads-url]: http://npm-stat.com/charts.html?package=validate-float-input
