import 'react-native';
import React from 'react';
import Card from '../../src/components/Card';

import renderer from 'react-test-renderer';

it('Card renders correctly', () => {
  const tree = renderer.create(<Card />).toJSON();
  expect(tree).toMatchSnapshot();
});