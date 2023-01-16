import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import {postsReducer} from '../../../Redux/postsSlice';
import {store} from '../../../Redux/store';
import {Navbar} from '../Navbar';


describe('Navbar component unit tests:', () => {

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
// Looks at all images in Navbar and checks the src of the first image:
test('renders an image element with an attribute of src that equals searchIcon', async () => {
  render(
    <Provider store={store}>
      <Navbar />
    </Provider>
  );
  const images = await screen.findAllByRole('img');
  expect(images[0].src).toContain('redditIcon');
});
// Looks at all images in Navbar and checks the src of the second image:
  test('renders an image element with an attribute of src that equals searchIcon', async () => {
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );
    const images = await screen.findAllByRole('img');
    expect(images[1].src).toContain('searchIcon');
  });
  // Looks at all images in Navbar and checks the src of the third image:
  test('renders an image element with an attribute of src that equals searchIcon', async () => {
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );
    const images = await screen.findAllByRole('img');
    expect(images[2].src).toContain('filterIcon');
  });
// Checks that three image elements are rendered by Navbar component:
  test('renders 3 image elements in the NavBar component', async () => {
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );
    const imageElements = await screen.findAllByRole('img');
    expect(imageElements).toHaveLength(3);
  })
  // Tests that the two span elements aren't visible:
  test('renders two span elements in the NavBar component', async () => {
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );
    const spanElements = await screen.findAllByText(/hidden/);
    expect(spanElements).toHaveLength(2);
    expect(spanElements).not.toBeVisible;
  })

});
