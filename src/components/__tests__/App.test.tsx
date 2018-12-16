import * as React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import Header from '../Header';
import Settings from '../Settings';
import Output from '../Output';

it('should contain one Header Component', () => {
  const component = shallow(<App />);
  expect(component.find(Header).length).toEqual(1);
});

it('should contain one Settings Component', () => {
  const component = shallow(<App />);
  expect(component.find(Settings).length).toEqual(1);
});

it('should contain one Output Component', () => {
  const component = shallow(<App />);
  expect(component.find(Output).length).toEqual(1);
});
