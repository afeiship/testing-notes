import React from 'react';
import { shallow } from 'enzyme';
import SwitchBtn from './switch-btn';

describe('Basic Test', () => {
  test.only('Toggle on/off', () => {
    const component = shallow(<SwitchBtn />);

    // click - off
    component.find('button').simulate('click');
    const text = component.find('.switch-btn').text();
    expect(text).toBe('OFF');

    // click - on
    component.find('button').simulate('click');
    const text2 = component.find('.switch-btn').text();
    expect(text2).toBe('ON');
  });
});
