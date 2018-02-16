import 'react-native';
import React from 'react';
import CadeiraNovaGrande from '../../src/components/CadeiraNovaGrade';

import renderer from 'react-test-renderer';

it('CadeiraNovaGrande selected renders correctly', () => {
  const tree = renderer.create(<CadeiraNovaGrande cadeira={selecionada=true}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
it('CadeiraNovaGrande not selected renders correctly', () => {
    const tree = renderer.create(<CadeiraNovaGrande cadeira={selecionada=false}/>).toJSON();
    expect(tree).toMatchSnapshot();
});