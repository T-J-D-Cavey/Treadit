import {FailedToLoad} from '../../src/components/mainpage/FailedToLoad';

describe('Loading.cy.js', () => {
  it('playground', () => {
      cy.mount(<FailedToLoad />)
      cy.contains('h3', 'Failed to load content.').should('be.visible');
      cy.contains('p', 'Refresh your browser or check your internet connection.').should('be.visible');
      cy.get('.flex').find('[class="spinnerContainer"]').should('be.visible');
      cy.get('.flex').find('[class="spinnerContainer"]').should('have.css', 'animation').and('match', /spinning/);
  })
})