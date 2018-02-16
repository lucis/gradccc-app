import 'react-native';
import React from 'react';
import Button from '../../src/components/Button';

import renderer from 'react-test-renderer';

it('Button renders correctly', () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
});