/// <reference types='cypress'/>

describe('spinner / loader tests', () => {
  beforeEach(() => {
    cy.visit('/');
  })
  it('should show the spinner when page first renders', () => {
    cy.get('.spinnerContainer').find('img');
  })
  // I want to do a test for the spinner animation working / spinner rotating

  it('should not show the spinner after data loads', () => {
    cy.wait(3000);
    cy.get('.spinnerContainer').should('not.exist');
    cy.contains('h1', 'Treadit').should('be.visible');
  })

})

describe('navbar tests', () => {
  beforeEach(() => {
    cy.visit('/');
  })
  it('should show the navbar', () => {
    cy.get('.nav').find('.flex');
    cy.get('.nav').find('.navflex');
    cy.get('.nav').find('[class="flex navflex"]');

  })

  it('should have working navbar filter and search buttons', () => {
    cy.contains('label', 'Subreddit:').should('not.exist');
    cy.getFilterButton().click();
    cy.contains('label', 'Subreddit:').should('be.visible');
    cy.get('.searchbar').should('not.exist');
    cy.getSearchButton().click();
    cy.get('.searchbar').should('be.visible')
  })

  it('should have search bar detecting text input and changes state when submit is clicked', () => {
    cy.getSearchButton().click();
    cy.get('input[placeholder="search..."]').should('have.value', '');
    cy.get('input[placeholder="search..."]').type('test of the searchbar box');
    cy.contains('button', 'Submit').click();
    cy.get('.spinnerContainer').find('img').should('be.visible');
    // I need to test for a new get request being sent
  })
})

describe('hero banner and posts feed tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should show Treadit headers and icons', () => {
    cy.contains('h1', 'Treadit').should('be.visible');
    cy.get('img[class="titleBackground"]').should('be.visible');
    cy.contains('p', 'Find the best hiking reddit posts').should('be.visible');
  })

  it('should show at least one post', () => {
    cy.get('.gridItem').should('be.visible');
    cy.get('.postSection').find('p').should('be.visible');
    cy.get('h3').find('a').should('be.visible');
    cy.get('img').get('.commentIcon').should('be.visible');

  })
})

// describe('posts feed tests', () => {
//   beforeEach(() => {
//     cy.visit('/');
//     cy.wait(3000);
//   });
// })