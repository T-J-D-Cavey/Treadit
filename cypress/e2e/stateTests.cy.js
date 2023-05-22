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
            expect(state.posts.limit).to.equal(50);
            expect(state.posts.timeframe).to.equal('week');
            expect(state.posts.searchTerm).to.be.null;
            expect(state.posts.searchbar).to.be.false;
            expect(state.posts.filter).to.be.false;
        })
        
    })


})