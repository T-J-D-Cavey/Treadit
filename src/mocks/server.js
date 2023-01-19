import { setupServer } from 'msw/node';
// import { mockServerClient } from 'mockserver-client';

import {handlers} from './handlers';



export const server = setupServer(...handlers);

// Retrieves recorded requests & responses from MSW. Uncomment to debug MSW mock API requests and responses:
// mockServerClient("localhost", 3000)
//     .retrieveRecordedRequestsAndResponses({})
//     .then(
//         function (recordedRequestsAndResponses) {
//             console.log(JSON.stringify(recordedRequestsAndResponses));
//         },
//         function (error) {
//             console.log(error);
//         }
//     );
