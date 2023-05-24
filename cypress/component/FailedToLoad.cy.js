import {FailedToLoad} from '../../src/components/mainpage/FailedToLoad';

describe('Loading.cy.js', () => {
  it('playground', () => {
      cy.mount(<FailedToLoad />)

      cy.contains('h3', 'Failed to load content.').should('be.visible')
      .and('have.class', 'centered')
      .and((h3) => {
        expect(h3).to.have.css('text-align', 'center');
        expect(h3).to.have.css('max-width');
      })
      cy.contains('p', 'Refresh your browser or check your internet connection.').should('be.visible')
      .and('have.class', 'centered')
      .and((p) => {
        expect(p).to.have.css('max-width')
        expect(p).to.have.css('text-align', 'center')
      })
      cy.get('div[class="flex"]').find('img[class="spinnerContainer"]').should('be.visible')
      .and('have.attr', 'src', '/__cypress/src/static/media/redditIcon.6308b393e00699abc98ea635448e9369.svg')
      .and('have.attr', 'alt')
      // One way of testing for specific CSS styles using REGEX:
      cy.get('.flex').find('img[class="spinnerContainer"]').should('have.css', 'animation').and('match', /spinning/);
      // Another way is to see if individual styles are included:
      cy.get('.flex').find('img[class="spinnerContainer"]').should((img) => {
        expect(img).to.have.css('animation').that.includes('spinning')
        .and.includes('2s')
        .and.includes('linear')
        .and.includes('0s')
        .and.includes('infinite')
        .and.includes('normal')
      })
  })
})