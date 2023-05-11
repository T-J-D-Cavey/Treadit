/// <reference types='cypress'/>

describe('spinner / loader tests', () => {
  beforeEach(() => {
    cy.visit('/');
  })
  it('spinner shows', () => {
    cy.get('.spinnerContainer').find('img');
  })

  // I want to do a test for the spinner animation working / spinner rotating
})

describe('navbar tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(3000);
  })
  it('navbar shows', () => {
    cy.get('.nav').find('.flex');
    cy.get('.nav').find('.navflex');
    cy.get('.nav').find('[class="flex navflex"]');

  })

  it('navbar filter and search buttons work when clicked', () => {
    cy.getFilterButton().click();
    cy.contains('Subreddit').should('be.visible');
    cy.getSearchButton().click();
    cy.contains('search').should('be.visible')
  })
})

describe('search bar widget tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(3000);
  });

  it('detects text input and changes state when submit is clicked', () => {
    cy.getSearchButton().click();
    cy.get('input[placeholder="search..."]').type('test of the searchbar box');
    cy.contains('button', 'Submit').click();
  })
})