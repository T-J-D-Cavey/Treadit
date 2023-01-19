import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

    test('renders an image element with an attribute of src that equals redditIcon', async () => {
      renderWithProviders(<Navbar />)
      const images = await screen.findAllByRole('img');
      expect(images[0].src).toContain('redditIcon');
    });

    test('renders an image element with an attribute of src that equals searchIcon', async () => {
      renderWithProviders(<Navbar />)
      const images = await screen.findAllByRole('img');
      expect(images[1].src).toContain('searchIcon');
    });

    test('renders an image element with an attribute of src that equals filterIcon', async () => {
      renderWithProviders(<Navbar />)
      const images = await screen.findAllByRole('img');
      expect(images[2].src).toContain('filterIcon');
    });

    test('renders 3 image elements in the NavBar component', async () => {
      renderWithProviders(<Navbar />)
      const imageElements = await screen.findAllByRole('img');
      expect(imageElements).toHaveLength(3);
    })

    test('renders two span elements in the NavBar component', async () => {
      renderWithProviders(<Navbar />)
      const spanElements = await screen.findAllByText(/hidden/);
      expect(spanElements).toHaveLength(2);
      expect(spanElements).not.toBeVisible;
    })
    });

  describe('Navbar component integration tests:', () => {

    test('searchbar input appears after the searchbar buttton is clicked:', () => {
      renderWithProviders(<Navbar />)
      const searchButton = screen.getByRole('button', { name: /search/i });
      fireEvent.click(searchButton);
      const searchbar = screen.getByPlaceholderText(/search.../i);
      expect(searchbar).toBeInTheDocument();       
    })

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
 
  // ******Need to write a test for click of logoIcon, and getPosts async thunk is correctly called with correct URL
  })  
})
