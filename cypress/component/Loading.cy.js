/// <reference types='cypress'/>

import {Loading} from '../../src/components/mainpage/Loading';

describe('Loading.cy.js', () => {
  it('should render all loading component content correctly with all attributes', () => {
      cy.mount(<Loading />)
      
      cy.get('div[class="spinnerContainer"]').should('exist').find('img').should('exist');
      // This checks the CSS animation styles are included and avoids having to have an exact match of order of these styles:
      cy.get('div[class="spinnerContainer"]').should((div) => {
        expect(div).to.have.css('animation').that.includes('spinning')
        .and.includes('2s')
        .and.includes('linear')
        .and.includes('0s')
        .and.includes('infinite')
        .and.includes('normal')
      })
      cy.get('img[class="spinner"]').should('be.visible')
      .and('have.attr', 'src', '/__cypress/src/static/media/spinnerIcon.4fc9f78a0e5b37eda19edb88d0a79b9d.svg')
      .and('have.attr', 'alt', 'loading');
  })
})