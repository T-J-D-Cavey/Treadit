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

    it('Mainpage component tests need to be written', () => {
        cy.intercept('GET', URL, {
            fixture: "mockResponse.json"
        }).as('getPosts')
        cy.mount(
            <Provider store={store}>
                <Mainpage  />
            </Provider>
            )
        store.dispatch(getPosts(URL))
      // I need to write tests here:
  })
})