import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

it('matches snapshot', () => {
  const component = renderer.create(
    <Button title={"my-button"}/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders button children in <div>', () => {
  const testRenderer = renderer.create(
    <Button title={"my-button"}>
      <b>My Button</b>
    </Button>
  );
  const testInstance = testRenderer.root;

  expect(testInstance.findByType('div').props.children).toStrictEqual([null, <b>My Button</b>]);
});

it('accepts a child component', () => {
  const testRenderer = renderer.create(
    <Button title={"my-button"}>
      <a href="/">Link</a>
    </Button>
  );
  const testInstance = testRenderer.root;

  expect(testInstance.findByType('a').props.href).toEqual( "/");
});

it('displays text inside of the button', () => {
  const testRenderer = renderer.create(
    <Button title={"my-button"}>
      Submit
    </Button>
  );
  const testInstance = testRenderer.root;

  expect(testInstance.findByType('div').props.className).toBe('inner');
  expect(testInstance.props.children).toEqual( "Submit");
});

it('displays an icon before the text', () => {
  const testRenderer = renderer.create(
    <Button title={"my-button"} icon="user">
      <b>My Button</b>
    </Button>
  );
  const testInstance = testRenderer.root;

  expect(testInstance.findByProps({icon: "user"}).props.children).toEqual(<b>My Button</b>);
});


// it('attaches a click event', () => {
//   const onButtonClick = jest.fn();
//   const wrapper = shallow(<Button onClick={onButtonClick} />);
//
//   expect(onButtonClick).not.toHaveBeenCalled();
//   wrapper.find('button').simulate('click', { preventDefault() {} });
//   expect(onButtonClick).toHaveBeenCalled();
// });
//
// it('shows a spinner and hides the text', () => {
//   const onButtonClick = jest.fn();
//   const wrapper = shallow(<Button onClick={onButtonClick} spinner />);
//
//   const output = wrapper.childAt(0);
//
//   expect(output.childAt(0).type()).toEqual(Spinner);
//   expect(wrapper.childAt(1)).toHaveProp('className', 'inner hidden');
// });
// });