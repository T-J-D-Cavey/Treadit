// import React from 'react';
// import { screen } from '@testing-library/react';
// import { BrowserRouter } from 'react-router-dom';
// import {App} from '../../../App';
// import {Mainpage} from '../Mainpage';
// import { getPosts } from '../../../Redux/postsSlice';
// import {renderWithProviders} from '../../../utils/testUtils';

// describe('Mainpage / Loading / FailedToLoad components:', () => {

//     describe('Integration tests:', () => {
//         test('The Loading component is rendered first:', () => {
//             const {store} = renderWithProviders(
//                 <BrowserRouter>
//                     <App />
//                 </BrowserRouter>);
//             const LoadingImage = screen.getByAltText(/loading/i);
//             const state = store.getState();
//             const status = state.posts.status;
//             expect(LoadingImage).toBeVisible();
//         })
        
//         test('A post is fetched and the list state is updated with response.data.children.data', async () => {
//             const {store} = renderWithProviders(
//                 <BrowserRouter>
//                     <App />
//                 </BrowserRouter>);
//             const headerElement = await screen.findByText(/testTitle/i);
//             const state = store.getState();
//             const list = state.posts.list;
//             expect(list.length).toBeGreaterThan(0);
//             expect(list.length).toBe(1);
//         })

//         test('The Mainpage component hero banner text is visible:', async () => {
//             renderWithProviders(
//                 <BrowserRouter>
//                     <App />
//                 </BrowserRouter>);
//             const headerElement = await screen.findByText(/Treadit/i);
//             const paraElement = await screen.findByText(/Find the best hiking reddit posts/i);
//             expect(headerElement).toBeInTheDocument();
//             expect(paraElement).toBeInTheDocument();
//         })
        
//         test('A post is rendered based on data stored in list state:', async () => {
//             renderWithProviders(
//                 <BrowserRouter>
//                     <App />
//                 </BrowserRouter>);
//             const headerElement = await screen.findByText(/testTitle/i);
//             expect(headerElement).toBeInTheDocument();
//         })

//         test('FailedToLoad component is rendered when a 404 error is returned from the async thunk:', async () => {
//             const {store} = renderWithProviders(<Mainpage />);
//             store.dispatch(getPosts('https://www.reddit.com/wrongurl/hiking/hot.json'))
//             const headerElement = await screen.findByText(/Failed to load content./i);
//             console.log(headerElement);
//             expect(headerElement).toBeInTheDocument();
//         })

//     })
// })