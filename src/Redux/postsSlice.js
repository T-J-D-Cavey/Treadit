import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (url) => {
        const response = await fetch(`https://www.reddit.com/${url}.json`);
        const data = await response.json();
        const posts = data.data.children;
            return posts;
    }
)
// Without awaits:
// export const getPosts = createAsyncThunk(
//     'posts/getPosts',
//     async (url) => {
//         return fetch(`https://www.reddit.com/${url}.json`)
//         .then(response => response.json())
//         .then(posts => {
//             const listArray = posts.data.children;
//             return listArray;
//         })
//     }
// )

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        list: [],
        status: null,
        // creating a fake state to make a reducer to try and fix error:
        testState: false
    },
    // creating a fake reducer to try and fix error:
    reducers: {
        changeTestState: (state) => {
            state.testState = true;
        }
    },
    extraReducers: {
        [getPosts.pending]: (state) => {
            state.status = 'loading'
        },
        [getPosts.fulfilled]: (state, action) => {
            state.list = action.payload;
            state.status = 'success'
        },
        [getPosts.rejected]: (state) => {
            state.status = 'failed'
        }
    }
});

// export const listSelector = (state) => {
//     return state.posts.list;
// }

// export const statusSelector = (state) => {
//     return state.posts.status;
// }

export const {postsReducer} = postsSlice.reducer;