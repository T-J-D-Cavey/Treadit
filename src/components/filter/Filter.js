import { useSelector, useDispatch} from "react-redux";
import { useEffect } from 'react';

import {
    getPosts, subredditSelector, listingSelector,
    limitSelector, timeframeSelector, searchTermSelector,
    changeSubreddit, changeListing, changeLimit,
    changeTimeframe, setSearchTerm
} from "../../Redux/postsSlice";

export function Filter() {
    const subreddit = useSelector(subredditSelector);
    const listing = useSelector(listingSelector);
    const limit = useSelector(limitSelector);
    const timeframe = useSelector(timeframeSelector);
    const searchTerm = useSelector(searchTermSelector);

    // Fetches the default data from initial state on mount:
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts(
            `https://www.reddit.com/${subreddit}/${listing}.json?limit=${limit}&t=${timeframe}`))
    }, []);

    return (
        <div className='postContainer flexboxContainer'>
           <p>subreddit</p>
           <p>listing</p>
           <p>limit</p>
           <p>searchTerm</p>
        </div>
    )
}