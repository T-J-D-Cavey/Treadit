import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (url) => {
        return fetch(`https://www.reddit.com/${url}.json`)
        .then(response => response.json())
        .then(posts => {
            console.log(posts);
        })
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        list: [],
        status: null
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

export const listSelector = (state) => {
    return state.posts.list;
}

export const {postsReducer} = postsSlice.reducer;