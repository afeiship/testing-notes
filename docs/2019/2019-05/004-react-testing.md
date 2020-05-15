# 004-react-testing

## enzyme
```shell
npm install enzyme enzyme-adapter-react-16 --save-dev
```

## setup.js
```js
// touch jest.setup.js

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
```

## jest.config.js
```js
{
  "testRegex": "((\\.|/*.)(spec))\\.js?$",
  "setupFilesAfterEnv": [
    "<rootDir>/jest.setup.js"
  ]
}
```

## usage
```js
import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import App, { Counter, dataReducer } from './App';
const list = ['a', 'b', 'c'];
describe('App', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  // render app
  test('renders the inner Counter', () => {
    const wrapper = mount(<App />);
    // wrapper.find(Counter).simulate('click');
    expect(wrapper.find(Counter).length).toEqual(1);
  });
});
```

## resources
- https://www.robinwieruch.de/react-testing-jest-enzyme
- https://jestjs.io/docs/zh-Hans/tutorial-react
