import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Mainpage } from '../Mainpage';
import {renderWithProviders} from '../../../utils/testUtils';
import { findAllInRenderedTree } from 'react-dom/test-utils';

describe('Mainpage component:', () => {
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
        test('A post is rended after mainpage is rendered:', async () => {
           const {store} = renderWithProviders(<Mainpage />);
            // const headerElement = await screen.findByText(/testTitle/i);
            await act(async () => {
                setTimeout(() => {
                   const state = store.getState();
                   const list = state.posts.list;
                   console.log(list);
                }, 4000)
            })

            // expect(headerElement).toBeInTheDocument();
        })

    });
})