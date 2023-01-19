import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { Mainpage } from '../Mainpage';
import {App} from '../../../App';
import {renderWithProviders} from '../../../utils/testUtils';
import { findAllInRenderedTree } from 'react-dom/test-utils';
import {getPosts} from '../../../Redux/postsSlice';

describe('App / Mainpage component:', () => {
    describe('Unit tests:', () => {
// ******Unit tests haven't been written yet.
    });

    describe('Integration tests:', () => {
        // Unable to write a test to render loading compontant:
        // test('Loading component is first rendered', () => {
        //     renderWithProviders(<Mainpage />);
        //     const spinner = screen.getByAltText(/loading/i);
        //     console.log(spinner);
        //     expect(spinner).toBeVisible();
        // })
        test('A post is fetched and the list state is updated with response.data.children.data', async () => {
            const {store} = renderWithProviders(
                <BrowserRouter>
                    <App />
                </BrowserRouter>);
            const headerElement = await screen.findByText(/testTitle/i);
            const state = store.getState();
            const list = state.posts.list;
            expect(list.length).toBeGreaterThan(0);
            expect(list.length).toBe(1);
        })
        test('A post is rendered based on data stored in list state:', async () => {
            renderWithProviders(
                <BrowserRouter>
                    <App />
                </BrowserRouter>);
            const headerElement = await screen.findByText(/testTitle/i);
            expect(headerElement).toBeInTheDocument();
        })

    });
})