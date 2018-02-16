import 'react-native';
import React from 'react';
import CardSection from '../../src/components/CardSection';

import renderer from 'react-test-renderer';

it('CardSection renders correctly', () => {
  const tree = renderer.create(<CardSection />).toJSON();
  expect(tree).toMatchSnapshot();
});