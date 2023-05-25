import { Posts } from '../../src/components/posts/Posts';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from '../../src/Redux/postsSlice';
import { getPosts } from '../../src/Redux/postsSlice';



    describe('Posts.cy.js', () => {
        const store = configureStore({
            reducer: {
                posts: postsReducer
            }
        })
        const URL = 'https://www.reddit.com/r/firstaid/hot.json?limit=50&t=year';

        beforeEach(() => {
            cy.intercept('GET', URL, {
                fixture: "mockResponse.json"
            }).as('getPosts')
        })
        it('should have consistent posts container structure, attributes and styles', () => {
            store.dispatch(getPosts(URL))

            cy.wait('@getPosts')

            cy.mount(
                <Provider store={store}>
                    <Posts />
                </Provider>
                )

            cy.get('div[class="gridItem"').should('exist')
            .and('have.css', 'overflow', 'hidden')
            .children()
            .should((children) => {
                expect(children).to.have.length(6)
                expect(children).to.be.visible
            }) 
        })

        it('should have elements with consistent structure, attributes, styles and content', () => {
            store.dispatch(getPosts(URL))

            cy.wait('@getPosts')

            cy.mount(
                <Provider store={store}>
                    <Posts />
                </Provider>
                )
        })
  })