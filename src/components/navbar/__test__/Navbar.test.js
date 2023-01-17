import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import {postsReducer, getPosts} from '../../../Redux/postsSlice';
import {store} from '../../../Redux/store';
import {Navbar} from '../Navbar';
import {renderWithProviders} from '../../../utils/testUtils';

describe('Navbar component tests:', () => {
  describe('Navbar component unit tests:', () => {
  
    // One approach, destructuring getByRole method from render function:
      test('renders the search button:', () => {
        const {getByRole} = render(
          renderWithProviders(<Navbar />)
          // <Provider store={store}>
          //   <Navbar />
          // </Provider>
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
    test('renders an image element with an attribute of src that equals redditIcon', async () => {
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
      test('renders an image element with an attribute of src that equals filterIcon', async () => {
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

  describe('Navbar component integration tests:', () => {
    // Tests integration of Navbar and SearchBar components:
      test('searchbar input appears after the searchbar buttton is clicked:', () => {
        render(
          <Provider store={store}>
            <Navbar />
          </Provider>
        );
        const searchButton = screen.getByRole('button', { name: /search/i });
        fireEvent.click(searchButton);
        const searchbar = screen.getByPlaceholderText(/search.../i);
        expect(searchbar).toBeInTheDocument();       
    })
    // Tests integration of Navbar and FilterForm components:
    test('filter form appears after the filter buttton is clicked:', () => {
      render(
        <Provider store={store}>
          <Navbar />
        </Provider>
      );
      const filterButton = screen.getByRole('button', { name: /filter/i });
      fireEvent.click(filterButton);
      const filterForm = screen.getByLabelText(/Subreddit:/i);
      expect(filterForm).toBeInTheDocument();       
    })
    // Tests that getPosts is sent a dispatch when the Navbar is rendered:
    // test('a dispatch is sent when the Navbar component is rendered', async () => {
       
    //   render(
    //     <Provider store={store}>
    //       <Navbar />
    //     </Provider>
    //   );

    //   const spy = jest.spyOn(store, 'dispatch');
    //   store.dispatch(getPosts("https://www.reddit.com/r/hiking.json"));
    
    //   expect(spy).toHaveBeenCalled();      
    // }) 
    // // Tests that getPosts is called a second time when the logoIcon is clicked:
    // test('another dispatch is sent when logoIcon is clicked', async () => {
    
    //   render(
    //     <Provider store={store}>
    //       <Navbar />
    //     </Provider>
    //   );
    //   const spy = jest.spyOn(store, 'dispatch');
    //   const logoIcon = await screen.findByAltText('logo');
    //   fireEvent.click(logoIcon);
    
    //   expect(spy).toHaveBeenCalledTimes(2);      
    // }) 
    // testing the payload and action creator being sent to getPosts:
  //   test('getPosts async thunk is called with the correct payload', async () => {
  //     const spy = jest.spyOn(store, 'dispatch');
  //     const url = "https://www.reddit.com/r/hiking.json";
  //     store.dispatch(getPosts(url));
  //     const expectedAction = {
  //       type: getPosts.pending.type,
  //       meta: { arg: url, requestId: expect.anything() },
  //     };
  //     await expect(spy).toHaveBeenCalledWith(expectedAction);;
  //   });
  // test('getPosts async thunk is called with the correct payload', async () => {
  //   const url = "https://www.reddit.com/r/hiking.json";
  //   store.dispatch(getPosts(url));
  //   const actions = store.getState.;
  //   const expectedAction = {
  //     type: getPosts.pending.type,
  //     meta: { arg: url, requestId: expect.anything() },
  //   };
  //   expect(actions).toContainEqual(expectedAction);
  // });

})
    
})
