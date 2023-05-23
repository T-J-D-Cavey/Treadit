import {Mainpage} from '../../src/components/mainpage/Mainpage';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from '../../src/Redux/postsSlice';
import { getPosts } from '../../src/Redux/postsSlice';


describe('Mainpage.cy.js', () => {
    const store = configureStore({
        reducer: {
            posts: postsReducer
        }
    })
    
    const URL = 'https://www.reddit.com/r/hiking/hot.json?limit=50&t=week';

    it('should render all mainpage component content correctly with all attributes', () => {
        cy.intercept('GET', URL, {
            fixture: "mockResponse.json"
        }).as('getPosts')
        cy.mount(
            <Provider store={store}>
                <Mainpage  />
            </Provider>
            )
        store.dispatch(getPosts(URL))
        cy.get('div[class="flex intro"]').find('h1').should('exist');
        cy.get('div[class="flex intro"]').find('img').should('exist');
        cy.get('div[class="flex intro"]').find('p').should('exist');
        // An example of how to test for element type, content, class and css attributes:
        cy.contains('h1', 'Treadit').should('be.visible')
        .and('have.class', 'title')
        .and('have.css', 'font-family', '"Seymour One", sans-serif');
        cy.get('img[class="titleBackground"]').should('be.visible')
        .and('have.attr', 'src', '/__cypress/src/static/media/mountainTitleIcon.84253c9262faff3b81c3cb4c70fd37f5.svg')
        .and('have.attr', 'alt', 'mountain')
        .and('have.css', 'z-index', '-1');
        cy.contains('p', 'Find the best hiking reddit posts').should('be.visible')
        .and('have.css', 'font-weight', '600')

  })
})