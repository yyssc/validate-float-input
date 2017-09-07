/* eslint-disable object-shorthand */

// components
const HelloWorld = require('./lib/components/HelloWorld').default;
const ValidateFloatInput = require('./lib/components/ValidateFloatInput').default;

// shapes
const HelloWorldShape = require('./lib/shapes/HelloWorldShape').default;

module.exports = {
  HelloWorld: HelloWorld,
  ValidateFloatInput: ValidateFloatInput,

  HelloWorldShape: HelloWorldShape,
};
