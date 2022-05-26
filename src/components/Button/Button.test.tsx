import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

it('changes the class when hovered', () => {
  const component = renderer.create(
    <Button label="Hello world!" />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
