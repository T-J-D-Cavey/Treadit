import '@testing-library/jest-dom/extend-expect';
import {server} from './mocks/server';

// Uncomment below and replace the beforeAll above to debug MSW get request / responses:
beforeAll(() => server.listen({
    onUnhandledRequest: 'error'
}));

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

