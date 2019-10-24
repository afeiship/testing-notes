import React from 'react';
import { shallow } from 'enzyme';
import SwitchBtn from '@/src/004-react/components/switch-btn';


/**
 * only test me:
 * npx jest ./__tests__/004-react/switch-btn.spec.js
 */

describe('Basic Test', () => {
  test('Toggle on/off', () => {
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
