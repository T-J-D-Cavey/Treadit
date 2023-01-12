import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// Async thunk using awaits to retrieve data from the reddit .json api:
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

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        list: [],
        status: null,
        subreddit: 'r/hiking',
        listing: 'hot',
        limit: 50,
        timeframe: 'week',
        searchTerm: null,
        searchbar: false,
        filter: false
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
        },
        setSearchbar: (state) => {
            state.searchbar = !state.searchbar;
        },
        setFilter: (state) => {
            state.filter = !state.filter;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getPosts.fulfilled, (state, action) => {
            state.list = action.payload;
            state.status = 'success'
            })
            .addCase(getPosts.rejected, (state) => {
            state.status = 'failed'
            })
        },
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

export const searchbarSelector = (state) => {
    return state.posts.searchbar;
}

export const filterSelector = (state) => {
    return state.posts.filter;
}

export const {changeSubreddit, changeListing, changeLimit, changeTimeframe, setSearchTerm, setSearchbar, setFilter} = postsSlice.actions;

export const postsReducer = postsSlice.reducer;


/*

    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getPosts.fulfilled, (state, action) => {
            state.list = action.payload;
            state.status = 'success'
            })
            .addCase(getPosts.rejected, (state) => {
            state.status = 'failed'
            })
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







*/