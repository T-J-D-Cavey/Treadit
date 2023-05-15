import { Notfound } from '../../src/components/Notfound';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

describe('Notfound.cy.js', () => {
  it('should render the component correctly', () => {
      cy.mount(
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<Notfound />} />
            </Routes>
        </BrowserRouter>
      )
      cy.contains('h3', 'Page not found').should('be.visible');
      cy.contains('p', 'Redirecting you in a few moments').should('be.visible');
      cy.get('.flex').find('[class="spinnerContainer"]').should('be.visible');
      cy.get('.flex').find('[class="spinnerContainer"]').should('have.css', 'animation').and('match', /spinning/);
  })
})