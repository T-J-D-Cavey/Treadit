import { useSelector, useDispatch} from "react-redux";
import { useEffect } from 'react';

import {
    getPosts, subredditSelector, listingSelector,
    limitSelector, timeframeSelector, searchTermSelector,
    changeSubreddit, changeListing, changeLimit,
    changeTimeframe
} from "../../Redux/postsSlice";
import {FilterForm} from "./FilterForm";

export function Filter() {
    const subreddit = useSelector(subredditSelector);
    const listing = useSelector(listingSelector);
    const limit = useSelector(limitSelector);
    const timeframe = useSelector(timeframeSelector);

    console.log(subreddit)

    // Fetches the default data from initial state on mount:
    const dispatch = useDispatch();
    const callGetPosts = () => {
        dispatch(getPosts(
            `https://www.reddit.com/${subreddit}/${listing}.json?limit=${limit}&t=${timeframe}`))
    }
    useEffect(() => {
        callGetPosts()
    }, []);
    
    return (
        <div className='postContainer flexboxContainer'>
           <FilterForm callGetPosts={callGetPosts} />
        </div>
    )
}