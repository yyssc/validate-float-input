/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ValidateFloatInput from '../src/components/ValidateFloatInput';

storiesOf('ValidateFloatInput', module)
  .addWithInfo('default', () => (
    <ValidateFloatInput />
  ))
  .addWithInfo('events', () => (
    <ValidateFloatInput
      onChange={action('onChange')}
      onBlur={action('onBlur')}
    />
  ));
