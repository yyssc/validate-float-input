/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ValidateFloatInput from '../src/components/ValidateFloatInput';

storiesOf('ValidateFloatInput', module)
  .addWithInfo('default', () => (
    <ValidateFloatInput />
  ));
