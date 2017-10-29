import React, { Component } from 'react';
import { bool } from 'prop-types';
import './Tap.styl';

export default class Tap extends Component {
  static propTypes = {
    light: bool,
    waves: bool,
    fade: bool,
    scale: bool,
  };

  static defaultProps = {
    light: false,
    waves: false,
    fade: false,
    scale: false,
  };

  render() {
    const { children } = this.props;
    return(
      <span className="Tap">
        {children}
      </span>
    )
  }
}