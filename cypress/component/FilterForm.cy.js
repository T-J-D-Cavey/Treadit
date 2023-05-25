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
        const URL = 'https://www.reddit.com/r/hiking/hot.json?limit=50&t=week';
        it('should be a form with containers with correct attributes and styles', () => {
            cy.intercept('GET', URL, {
                fixture: "mockResponse.json"
            }).as('getPosts')
            cy.mount(
                <Provider store={store}>
                    <FilterForm />
                </Provider>
                )
            cy.get('form[class="filterForm"]')
            .should('exist')
            .and('be.visible');
            cy.get('form[class="filterForm"]')
            .children()
            .should('have.length', 5)
            .and('have.class', 'filterItem')
            .and('have.css', 'position', 'relative')
            .and('have.css', 'transform')
                
        })

        it('should test one label and input to demonstrate how to test structure, attributes and styles', () => {
            cy.intercept('GET', URL, {
                fixture: "mockResponse.json"
            }).as('getPosts')
            cy.mount(
                <Provider store={store}>
                    <FilterForm />
                </Provider>
                )
            cy.contains('label', 'Subreddit:').should((element) => {
                expect(element).to.have.attr('for', 'subreddit')
                expect(element).to.have.class('marginRight')
                })
            cy.get('select[id="subreddit"]').should('exist')
            .children('option')
            .should('have.length', 21)
            cy.contains('button', 'Submit').should((button) => {
                expect(button).to.have.class('button')
                expect(button).to.have.attr('type', 'submit')
                expect(button).to.have.css('border-radius', '10px')
            })
        })

        it('should have working form values and inputs are selected', () => {
            cy.intercept('GET', URL, {
                fixture: "mockResponse.json"
            }).as('getPosts')
            cy.mount(
                <Provider store={store}>
                    <FilterForm />
                </Provider>
                )
            // Fill in form values and tests input now selected:
            cy.get('#subreddit').select('r/Adventures').should('have.value', 'r/Adventures');
            cy.get('#listing').select('hot').should('have.value', 'hot');
            cy.get('#limit').select('10').should('have.value', '10');
            cy.get('#timeframe').select('day').should('have.value', 'day');
        })    
  })