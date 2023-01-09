import { useDispatch, useSelector } from "react-redux";

import { getPosts, subredditSelector, listingSelector,
    limitSelector, timeframeSelector, searchTermSelector, setSearchTerm } from "../../Redux/postsSlice";

export function SearchBar({callGetPosts}) {

    const subreddit = useSelector(subredditSelector);
    const listing = useSelector(listingSelector);
    const limit = useSelector(limitSelector);
    const timeframe = useSelector(timeframeSelector);
    const searchTerm = useSelector(searchTermSelector);

// To convert whitespaces into %20 and change searchterm state:
    const dispatch = useDispatch();
    const searchTermOnChange = (event) => {
        event.preventDefault();
        const term = event.target.value.replace(/\s/g, '%20');
        dispatch(setSearchTerm(term));        
    }

    // Calls getPosts with /search replacing /listing and search term added to query params if a search term is present when submit is clicked.
    // Otherwise it calls getPosts without search term and with /listing that matches current state:
    const callGetPostsPlusSearchTerm = (event) => {
        event.preventDefault();
        callGetPosts();
        // if (searchTerm) {
        //     dispatch(getPosts(
        //         `https://www.reddit.com/${subreddit}/search.json?limit=${limit}&t=${timeframe}&q=${searchTerm}`))            
        // } else {
        //     dispatch(getPosts(
        //         `https://www.reddit.com/${subreddit}/${listing}.json?limit=${limit}&t=${timeframe}`))
        // }

    }
        return (
            <div>
                <form onSubmit={callGetPostsPlusSearchTerm}>
                    <input type='text' onChange={searchTermOnChange} placeholder='search...'/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
}