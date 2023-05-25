// import { rest } from 'msw';

// export const handlers = [
//     rest.get('https://www.reddit.com/r/hiking/hot.json', (req, res, ctx) => {
//         return res(
//             ctx.status(200),
//             ctx.delay(150),
//             ctx.json({
//                kind: 'listing',
//                data: {
//                 children: [
//                     {
//                         data: {
//                             author: 'testAuthor',
//                             ups: 10,
//                             post_hint: 'hosted:video',
//                             created: 1674063139,
//                             selftext: 'test description',
//                             permalink: '/testURL',
//                             title: 'testTitle',
//                             num_comments: 4,
//                         }
//                     }
//                 ]
//                } 
//             })
//         )
//     }),
//     rest.get('https://www.reddit.com/wrongurl/hiking/hot.json', (req, res, ctx) => {
//         return res(
//             ctx.status(404, 'test error message'),
//         )
//     }),

// ]