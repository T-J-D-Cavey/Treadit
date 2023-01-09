import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// Using awaits:
export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (url) => {
        console.log(url);
        const response = await fetch(url);
        const data = await response.json();
        const posts = data.data.children;
            return posts;
    }
)

// using awaits with search term added: to be deleted:
// export const getPostsPlusSearchTerm = createAsyncThunk(
//     'posts/getPosts',
//     async (url) => {
//         const response = await fetch(url);
//         const data = await response.json();
//         const posts = data.data.children;
//             return posts;
//     }
// )

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        list: [],
        status: null,
        subreddit: 'r/hiking',
        listing: 'hot',
        limit: 30,
        timeframe: 'week',
        searchTerm: null
    },
    reducers: {
        changeSubreddit: (state, action) => {
            state.subreddit = action.payload;
        },
        changeListing: (state, action) => {
            state.listing = action.payload;
        },
        changeLimit: (state, action) => {
            state.limit = action.payload;
        },
        changeTimeframe: (state, action) => {
            state.timeframe = action.payload;
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        }
    },
    // I need to convert this into 'builder' syntax:
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

export const statusSelector = (state) => {
    return state.posts.status;
}

export const subredditSelector = (state) => {
    return state.posts.subreddit;
}

export const listingSelector = (state) => {
    return state.posts.listing;
}

export const limitSelector = (state) => {
    return state.posts.limit;
}

export const timeframeSelector = (state) => {
    return state.posts.timeframe;
}

export const searchTermSelector = (state) => {
    return state.posts.searchTerm;
}

export const {changeSubreddit, changeListing, changeLimit, changeTimeframe, setSearchTerm} = postsSlice.actions;



export const postsReducer = postsSlice.reducer;