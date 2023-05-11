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
    cy.visit('/')
  })
  it('navbar shows', () => {
    cy.get('.nav').find('.flex');
    cy.get('.nav').find('.navflex');
    cy.get('.nav').find('[class="flex navflex"]');

  })
})