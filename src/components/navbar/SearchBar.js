import { useDispatch, useSelector } from "react-redux";

import { getPosts, subredditSelector, listingSelector,
    limitSelector, timeframeSelector, searchTermSelector, setSearchTerm } from "../../Redux/postsSlice";

export function SearchBar() {

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
    // Invoke thunk to get posts with search term added:
    const callGetPostsPlusSearchTerm = () => {
        dispatch(getPosts(
            `https://www.reddit.com/${subreddit}/${listing}.json?limit=${limit}&t=${timeframe}&q=${searchTerm}`))
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