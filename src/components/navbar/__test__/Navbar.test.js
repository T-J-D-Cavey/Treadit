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

describe('Navbar component:', () => {
  describe('Unit tests:', () => {

    test('renders the search button:', () => {
      const {getByRole} = renderWithProviders(<Navbar />)
      expect(getByRole('button', { name: /search/i })).toBeInTheDocument()
    });

    // Equivalent test to the one above but using screen object: 
    test('renders the filter button:', () => {
      renderWithProviders(<Navbar />)
      const filterButton = screen.getByRole('button', { name: /filter/i })
      expect(filterButton).toBeInTheDocument()
    });

    // The test below was failing till it was made async / await:
    test('renders an image element with an alt text of logo', async () => {
      renderWithProviders(<Navbar />)
      const logoIcon = await screen.findByAltText('logo');
      expect(logoIcon).toBeInTheDocument();
    });

    // Looks at all images in Navbar and checks the src of the first image:
    test('renders an image element with an attribute of src that equals redditIcon', async () => {
      renderWithProviders(<Navbar />)
      const images = await screen.findAllByRole('img');
      expect(images[0].src).toContain('redditIcon');
    });

    // Looks at all images in Navbar and checks the src of the second image:
    test('renders an image element with an attribute of src that equals searchIcon', async () => {
      renderWithProviders(<Navbar />)
      const images = await screen.findAllByRole('img');
      expect(images[1].src).toContain('searchIcon');
    });

    // Looks at all images in Navbar and checks the src of the third image:
    test('renders an image element with an attribute of src that equals filterIcon', async () => {
      renderWithProviders(<Navbar />)
      const images = await screen.findAllByRole('img');
      expect(images[2].src).toContain('filterIcon');
    });

    // Checks that three image elements are rendered by Navbar component:
    test('renders 3 image elements in the NavBar component', async () => {
      renderWithProviders(<Navbar />)
      const imageElements = await screen.findAllByRole('img');
      expect(imageElements).toHaveLength(3);
    })

    // Tests that the two span elements aren't visible:
    test('renders two span elements in the NavBar component', async () => {
      renderWithProviders(<Navbar />)
      const spanElements = await screen.findAllByText(/hidden/);
      expect(spanElements).toHaveLength(2);
      expect(spanElements).not.toBeVisible;
    })
    });

  describe('Navbar component integration tests:', () => {

    // Tests integration of Navbar and SearchBar components:
    test('searchbar input appears after the searchbar buttton is clicked:', () => {
      renderWithProviders(<Navbar />)
      const searchButton = screen.getByRole('button', { name: /search/i });
      fireEvent.click(searchButton);
      const searchbar = screen.getByPlaceholderText(/search.../i);
      expect(searchbar).toBeInTheDocument();       
    })

    // Tests integration of Navbar and FilterForm components:
    test('filter form appears after the filter buttton is clicked:', () => {
      renderWithProviders(<Navbar />)
      const filterButton = screen.getByRole('button', { name: /filter/i });
      fireEvent.click(filterButton);
      const filterForm = screen.getByLabelText(/Subreddit:/i);
      expect(filterForm).toBeInTheDocument();       
    })

    test('initial state is set correctly after the Navbar is rendered:', async () => {
      const {store} = renderWithProviders(<Navbar />);
      const actualState = store.getState();
      const expectedState = {
        posts: {
            list: [],
            status: 'loading',
            subreddit: 'r/hiking',
            listing: 'hot',
            limit: 50,
            timeframe: 'week',
            searchTerm: null,
            searchbar: false,
            filter: false
      }
    };
    expect(actualState).toEqual(expectedState);    
    }) 
  })  
})
