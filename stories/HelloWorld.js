/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import HelloWorld from '../src/components/HelloWorld';

storiesOf('HelloWorld', module)
  .addWithInfo('default', () => (
    <HelloWorld />
  ));
