import React from 'react';
import SwitchBtn from './components/switch-btn';

export default class extends React.Component {
  render() {
    return (
      <div className="hello">
        Hello world~
        <SwitchBtn />
      </div>
    );
  }
}
