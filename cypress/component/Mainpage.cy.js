import {Mainpage} from '../../src/components/mainpage/Mainpage';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import {postsReducer} from '../../src/Redux/postsSlice';


describe('Loading.cy.js', () => {
    const store = configureStore({
        reducer: {
            posts: postsReducer
        }
       
    })
    it('playground', () => {
        cy.mount(
            <Provider store={store}>
                <Mainpage  />
            </Provider>
        )
      // I need to write tests here:
  })
})