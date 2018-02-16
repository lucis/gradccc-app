import 'react-native';
import React from 'react';
import Spinner from '../../src/components/Spinner';

import renderer from 'react-test-renderer';

it('Spinner renders correctly', () => {
  const tree = renderer.create(<Spinner />).toJSON();
  expect(tree).toMatchSnapshot();
});