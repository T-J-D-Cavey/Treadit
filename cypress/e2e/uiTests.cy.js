/// <reference types='cypress'/>

describe('spinner / loader tests', () => {
  beforeEach(() => {
    cy.visit('/');
  })
  it('should show a rotating spinner when page first renders', () => {
    cy.get('.spinnerContainer').find('img').should('be.visible');
    cy.get('.spinnerContainer').should('have.css', 'animation');
  })

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
    cy.get('.nav').find('.flex').should('be.visible');
    cy.get('.nav').find('.navflex').should('be.visible');
    cy.get('.nav').find('[class="flex navflex"]').should('be.visible');
    cy.get('div').find('[class="logoIcon"]').should('be.visible');

  })

  it('should have working navbar filter and search buttons', () => {
    cy.contains('label', 'Subreddit:').should('not.exist');
    cy.getFilterButton().click();
    cy.contains('label', 'Subreddit:').should('be.visible');
    cy.get('.searchbar').should('not.exist');
    cy.getSearchButton().click();
    cy.get('.searchbar').should('be.visible')
  })

  it('should have search bar detecting text input', () => {
    cy.getSearchButton().click();
    cy.get('input[placeholder="search..."]').should('have.value', '');
    cy.get('input[placeholder="search..."]').type('test of the searchbar box');
    cy.contains('button', 'Submit').click();
    cy.get('.spinnerContainer').find('img').should('be.visible');
    cy.wait(3000);
    cy.get('.spinnerContainer').should('not.exist');
    cy.contains('h1', 'Treadit').should('be.visible');
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

  it('should show at least one post using a real request and response', () => {
    cy.get('.gridItem').should('be.visible');
    cy.get('.postSection').find('p').should('be.visible');
    cy.get('h3').find('a').should('be.visible');
    cy.get('img').get('.commentIcon').should('be.visible');

  })

  it('should render the content sent from our mock response', () => {
    cy.intercept('GET', 'https://www.reddit.com/r/hiking/hot.json?limit=50&t=week', {
      fixture: "mockResponse.json"
    });
    cy.contains('span', 'testAuthor').should('be.visible');
    cy.contains('h3', 'testTitle').should('be.visible');
    cy.contains('p', 'test description')
    cy.contains('span', '4').should('be.visible');
    cy.contains('span', '10').should('be.visible');
  })

  // Need to write a test for a 404 response and the page not found page being rendered
})