import React from 'react';
import renderer from 'react-test-renderer';
import Icon from './Icon';

it('matches snapshot', () => {
  const component = renderer.create(<Icon icon="lock" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('sets a default color of currentColor', () => {
  const testRenderer = renderer.create(<Icon icon="lock" />);
  const testInstance = testRenderer.root;
  expect(testInstance.findByType('span').props.className).toBe('base currentColor normal');
});
