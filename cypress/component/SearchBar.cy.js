import { SearchBar } from '../../src/components/navbar/SearchBar';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from '../../src/Redux/postsSlice';
import { getPosts } from '../../src/Redux/postsSlice';



    describe('FilterForm.cy.js', () => {
        const store = configureStore({
            reducer: {
                posts: postsReducer
            }
        })
        const URL = 'https://www.reddit.com/r/hiking/hot.json?limit=50&t=week';
        it('playground', () => {
            cy.intercept('GET', URL, {
                fixture: "mockResponse.json"
            }).as('getPosts')
            cy.mount(
                <Provider store={store}>
                    <SearchBar />
                </Provider>)
            store.dispatch(getPosts(URL))
        // I need to write tests here:
        // I haven't written tests as these will be similar to existing tests demoed in the filterform component tests.
    })
  })