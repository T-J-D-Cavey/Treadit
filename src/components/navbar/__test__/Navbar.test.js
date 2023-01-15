import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import {postsReducer} from '../../../Redux/postsSlice';
import {store} from '../../../Redux/store';
import {Navbar} from '../Navbar';


describe('Navbar component tests:', () => {

// One approach, destructuring getByRole method from render function:
  test('renders the search button:', () => {
    const {getByRole} = render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );
    expect(getByRole('button', { name: /search/i })).toBeInTheDocument()
  });

  // Equivalent test to the one above but using screen object: 
  test('renders the filter button:', () => {
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );
    const filterButton = screen.getByRole('button', { name: /filter/i })
    expect(filterButton).toBeInTheDocument()
  });
// The test below was failing till it was made async / await:
  test('renders an image element with an alt text of logo', async () => {
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );
    const logoIcon = await screen.findByAltText('logo');
    expect(logoIcon).toBeInTheDocument();
  });

  test('renders 3 image elements in the NavBar component', async () => {
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );
    const imageElements = await screen.findAllByRole('img');
    expect(imageElements).toHaveLength(3);
  })

});

// This is a default test I will remove eventually:
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// This is non-default testing code from YT:
// import renderer from 'react-test-renderer';
// test("Snapshot of App.js", () => {
//     const component = renderer.create(<App />);
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
// })

// This is code from chatGPT:
// import { render, fireEvent } from 'react-testing-library'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import reducer from './reducer'
// import YourComponent from './YourComponent'

// describe('YourComponent', () => {
//   let store

//   beforeEach(() => {
//     store = createStore(reducer);

//   })

//   it('displays the correct text', () => {
//     const { getByText } = render(
//       <Provider store={store}>
//         <YourComponent />
//       </Provider>
//     )

//     expect(getByText('Hello, World!')).toBeInTheDocument()
//   })

//   it('dispatches an action on button click', () => {
//     const { getByText } = render(
//       <Provider store={store}>
//         <YourComponent />
//       </Provider>
//     )

//     fireEvent.click(getByText('Click me'))

//     expect(store.getActions()).toEqual([{ type: 'SOME_ACTION' }])
//   })
// })


  // This is my imitation of ChatGPTs code, which didn't work:
  // let store;
  // beforeEach(() => {
  //   store = configureStore({
  //     reducer: {
  //         posts: postsReducer
  //     }
  //     })
  //   store = createStore(postsReducer)
  // })
  // test('displays the correct text in H1 element', () => {
  //   const { getByText } = render(
  //     <Provider store={store}>
  //       <Mainpage />
  //     </Provider>
  //   )
  //   expect(getByText('Treadit')).toBeInTheDocument()
  // })





