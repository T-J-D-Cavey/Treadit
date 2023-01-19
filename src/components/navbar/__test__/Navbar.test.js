import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import {App} from '../../../App';
import {Navbar} from '../Navbar';
import {renderWithProviders} from '../../../utils/testUtils';
import userEvent from '@testing-library/user-event';

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

    test('Logo icon calls getPosts and loading page is rendered:', async () => {
      const {store} = renderWithProviders(
          <BrowserRouter>
              <App />
          </BrowserRouter>);
      const logoIcon = await screen.findByAltText(/logo/i);
      userEvent.click(logoIcon);
      const LoadingImage = await screen.findByAltText(/loading/i);
      expect(LoadingImage).toBeVisible();
    })
  })  
})
