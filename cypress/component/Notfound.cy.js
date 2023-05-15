import { Notfound } from '../../src/components/Notfound';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

describe('Notfound.cy.js', () => {
  it('playground', () => {
      cy.mount(
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<Notfound />} />
            </Routes>
        </BrowserRouter>
      )
      // I need to write tests here:
  })
})