/* eslint-disable react/prop-types */

import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { forbidExtraProps } from 'airbnb-prop-types';

import HelloWorldShape from '../shapes/HelloWorldShape';

const propTypes = forbidExtraProps(HelloWorldShape);

export const defaultProps = {
  title: 'Default Title',
};

export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
  }

  /**
   * @param {any} nextProps
   * @memberof HelloWorld
   */
  componentWillReceiveProps() {
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  /**
   * @param {any} prevProps
   * @param {any} prevState
   * @memberof HelloWorld
   */
  componentDidUpdate() {
  }

  handleClick() {
    this.setState({
      show: !this.state.show,
    });
  }

  render() {
    const { show } = this.state;

    const { title } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <button onClick={this.handleClick}>Press me</button>
        {
          show ? (<p>text ...</p>) : null
        }
      </div>
    );
  }
}

HelloWorld.propTypes = propTypes;
HelloWorld.defaultProps = defaultProps;
