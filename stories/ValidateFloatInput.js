/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ValidateFloatInput from '../src/components/ValidateFloatInput';

class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value) {
    this.setState({
      foo: value,
    });
  }
  render() {
    return (
      <ValidateFloatInput
        value="0.00"
        onChange={this.handleChange}
      />
    );
  }
}

storiesOf('ValidateFloatInput', module)
  .addWithInfo('default', () => (
    <ValidateFloatInput />
  ))
  .addWithInfo('events', () => (
    <div>
      <ValidateFloatInput
        onChange={action('onChange')}
        onBlur={action('onBlur')}
      />
      <ValidateFloatInput
        value="0.00"
        onChange={action('onChange')}
        onBlur={action('onBlur')}
      />
      <Text />
    </div>
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
