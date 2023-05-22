/// <reference types='cypress'/>

import { createResponseComposition } from "msw";

describe('State / store tests', () => {

    
    beforeEach(() => {
        cy.visit('/');
    })
    
    it('should have the correct initial state when first loading', () => {
        // gets access to the state made available to window.Cypress during E2E tests:
        cy.window().its('store').invoke('getState').then((state) => {
            expect(state.posts.list).to.deep.equal([]);
            expect(state.posts.status).to.be.null;
            expect(state.posts.subreddit).to.equal('r/hiking');
            expect(state.posts.listing).to.equal('hot');
            expect(state.posts.limit).to.equal('50');
            expect(state.posts.timeframe).to.equal('week');
            expect(state.posts.searchTerm).to.be.null;
            expect(state.posts.searchbar).to.be.false;
            expect(state.posts.filter).to.be.false;
        })
        
    })

    it('should have filter inputs that change the state when submitted', () => {
        cy.getFilterButton().click();
        cy.get('select[id="subreddit"]').select('r/First_Aid');
        cy.get('select[id="listing"]').select('new')
        cy.get('select[id="limit"]').select('10')
        cy.get('select[id="timeframe"]').select('month')
        cy.get('.filterForm').submit();

        cy.window().its('store').invoke('getState').then((state) => {
            expect(state.posts.status).to.equal('loading');
            expect(state.posts.subreddit).to.equal('r/First_Aid');
            expect(state.posts.listing).to.equal('new');
            expect(state.posts.limit).to.equal('10');
            expect(state.posts.timeframe).to.equal('month');
        })
    })

    it('should have search inputs that change the state when submitted', () => {
        cy.getSearchButton().click();
        cy.get('input[placeholder="search..."]').type('testing this with Cypress');
        cy.get('select[id="limit"]').select('100');
        cy.get('select[id="timeframe"]').select('year');
        cy.get('.filterForm').submit();

        cy.window().its('store').invoke('getState').then((state) => {
            expect(state.posts.status).to.equal('loading');
            expect(state.posts.searchTerm).to.equal('testing%20this%20with%20Cypress');
            expect(state.posts.limit).to.equal('100');
            expect(state.posts.timeframe).to.equal('year');
        })
    })


})