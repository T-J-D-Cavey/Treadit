/// <reference types='cypress'/>

import { FilterForm } from '../../src/components/navbar/FilterForm';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from '../../src/Redux/postsSlice';
import { getPosts } from '../../src/Redux/postsSlice';

    describe('FilterForm.cy.js', () => {
        const store = configureStore({
            reducer: {
                posts: postsReducer
            }
        })
        // to give insight into initial state. This is not the app's store so changes in state won't be picked up:
        const state = store.getState();
        const URL = 'https://www.reddit.com/r/hiking/hot.json?limit=50&t=week';
        it('playground', () => {
            cy.intercept('GET', URL, {
                fixture: "mockResponse.json"
            }).as('getPosts')
            cy.mount(
                <Provider store={store}>
                    <FilterForm />
                </Provider>
                )
            store.dispatch(getPosts(URL))
            // Fill in form values and tests input now selected:
            cy.get('#subreddit').select('r/Adventures').should('have.value', 'r/Adventures');
            cy.get('#listing').select('hot').should('have.value', 'hot');
            cy.get('#limit').select('10').should('have.value', '10');
            cy.get('#timeframe').select('day').should('have.value', 'day');

            // Submit the form
            // cy.get('.filterForm').submit();
    })
  })