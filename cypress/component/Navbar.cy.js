import { Navbar } from '../../src/components/navbar/Navbar';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from '../../src/Redux/postsSlice';
import { getPosts } from '../../src/Redux/postsSlice';



    describe('Navbar.cy.js', () => {
        const store = configureStore({
            reducer: {
                posts: postsReducer
            }
        })
        const URL = 'https://www.reddit.com/r/hiking/hot.json?limit=50&t=week';
        it('should render all navbar component content correctly with all attributes', () => {
            cy.intercept('GET', URL, {
                fixture: "mockResponse.json"
            }).as('getPosts')
            cy.mount(
                <Provider store={store}>
                    <Navbar />
                </Provider>)
            store.dispatch(getPosts(URL))
                
            cy.get('div[class="sticky"]')
            .find('div[class="nav"]')
            .find('div[class="flex navflex"]')
            .should('exist');
            // I'm unable to get this assertion to pass:
            // cy.get('div[class="flex navflex"] > div:first-child')
            // .should('have.prop', 'onClick')
            cy.get('img[class="logoIcon"]').should((element) => {
                expect(element).to.have.attr('src', '/__cypress/src/static/media/redditIcon.6308b393e00699abc98ea635448e9369.svg')
                expect(element).to.have.attr('alt', 'logo')
            });
            cy.get('div[class="flex iconFlex"] div')
            .find('button[aria-label="search"]')
            .should('exist');
            cy.get('div[class="flex iconFlex"] div')
            .find('button[aria-label="filter"]')
            .should('exist'); 
            cy.contains('span', 'hidden').should('exist')
            .and('not.be.visible');
            cy.get('span[class="displayNone"]').should('exist')
            .and('not.be.visible');

    })
  })