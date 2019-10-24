import React from 'react';
import cx from 'classnames';
import noop from 'noop';
import PropTypes from 'prop-types';
const CLASS_NAME = 'switch-btn';

export default class extends React.Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: true,
    onChange: noop
  };

  constructor(inProps) {
    super(inProps);
    this.state = {
      value: inProps.value
    };
  }

  _onClick = (inEvent) => {
    const { value } = this.state;
    this.setState({ value: !value });
  };

  // shouldComponentUpdate(inNextProps, inNextState) {
  //   const { value: stateValue } = inNextState;
  //   const { value: propsValue } = inNextProps;
  //   const changed = stateValue !== propsValue;
  //   if (changed) {
  //     this.setState({ value: propsValue });
  //   }
  //   return changed;
  // }

  render() {
    const { className, value, ...props } = this.props;
    const _value = this.state.value;
    return (
      <button className={cx(CLASS_NAME, className)} {...props} onClick={this._onClick}>
        {_value ? 'ON' : 'OFF'}
      </button>
    );
  }
}
