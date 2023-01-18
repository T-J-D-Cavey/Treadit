import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import {postsReducer, getPosts} from '../../../Redux/postsSlice';
import {store} from '../../../Redux/store';
import {Navbar} from '../Navbar';
import {SearchBar} from '../SearchBar';
import {renderWithProviders} from '../../../utils/testUtils';

describe('SearchBar component:', () => {
    describe('Unit tests:', () => {
// ******Unit tests haven't been written yet.
    });

    describe('Integration tests:', () => {
        test('searchTerm state is changed and matches what is typed into searchbar:', () => {
            const {store} = renderWithProviders(<SearchBar />);
            const expectedSearchTerm = 'testing';
            const searchBar = screen.getByPlaceholderText(/search.../i);
            userEvent.type(searchBar, 'testing');
            const actualState = store.getState();
            expect(actualState.posts.searchTerm).toMatch(expectedSearchTerm);
        })

        test('*How Many* input is changed and state is changed to selected option', () => {
            const {store} = renderWithProviders(<SearchBar />);
            const expectedLimit = '10';
            const howManySelect = screen.getByDisplayValue(/50/i);
            userEvent.selectOptions(howManySelect, '10');
            const actualState = store.getState();
            expect(actualState.posts.limit).toMatch(expectedLimit);
        })

        test('*Time range* input is changed and state is changed to selected option', () => {
            const {store} = renderWithProviders(<SearchBar />);
            const expectedTimeframe = 'day';
            const timeframeSelect = screen.getByDisplayValue(/week/i);
            userEvent.selectOptions(timeframeSelect, 'day');
            const actualState = store.getState();
            expect(actualState.posts.timeframe).toMatch(expectedTimeframe);   
        })
    // ******Need to write a test for click of submit button, and getPosts async thunk is correctly called with correct URL
    });
})