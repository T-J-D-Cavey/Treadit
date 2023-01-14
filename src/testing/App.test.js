import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import {store} from '../Redux/store';
import App from '../App';

// describe('this is an example of how to structure multiple tests', () => {
//     test('this is a single test', () => {
//         // test goes here
//     })
// })

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// This is non-default testing code from YT:
// import renderer from 'react-test-renderer';
// test("Snapshot of App.js", () => {
//     const component = renderer.create(<App />);
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
// })








