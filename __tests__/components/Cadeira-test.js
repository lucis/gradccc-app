import 'react-native';
import React from 'react';
import Cadeira from '../../src/components/Cadeira';

import renderer from 'react-test-renderer';

it('Cadeira selected renders correctly', () => {
  const tree = renderer.create(<Cadeira cadeira={selecionada=true}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
it('Cadeira not selected renders correctly', () => {
    const tree = renderer.create(<Cadeira cadeira={selecionada=false}/>).toJSON();
    expect(tree).toMatchSnapshot();
});