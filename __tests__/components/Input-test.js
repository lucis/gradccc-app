import 'react-native';
import React from 'react';
import Input from '../../src/components/Input';

import renderer from 'react-test-renderer';

it('Input renders correctly', () => {
  const tree = renderer.create(<Input />).toJSON();
  expect(tree).toMatchSnapshot();
});