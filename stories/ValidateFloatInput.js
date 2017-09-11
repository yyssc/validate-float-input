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
  ))
  .addWithInfo('show error', () => {
    let vfiRef = null;
    return (
      <div>
        <ValidateFloatInput
          ref={(c) => { vfiRef = c; }}
          onChange={action('onChange')}
          onBlur={action('onBlur')}
        />
        <button
          onClick={() => {
            vfiRef.showMsg('foo');
          }}
        >show error</button>
        <button
          onClick={() => {
            vfiRef.hideMsg();
          }}
        >hide error</button>

      </div>
    );
  });
