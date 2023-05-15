import {Mainpage} from '../../src/components/mainpage/Mainpage';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import {postsReducer} from '../../src/Redux/postsSlice';
import { FailedToLoad } from '../../src/components/mainpage/FailedToLoad';

import {useSelector, useDispatch, useContext} from 'react-redux';
import {
    getPosts, subredditSelector, listingSelector,
    limitSelector, timeframeSelector, searchTermSelector, 
    searchbarSelector, filterSelector, setSearchbar, setFilter
} from '../../src/Redux/postsSlice';


describe('Loading.cy.js', () => {
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
                <Mainpage  />
            </Provider>
            // <FailedToLoad />
            )
            // const dispatch = useDispatch();
            // dispatch(getPosts(URL));
        store.dispatch(getPosts())
      // I need to write tests here:
  })
})