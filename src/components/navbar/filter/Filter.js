// import { useSelector, useDispatch} from "react-redux";
// import { useEffect } from 'react';

// import {
//     getPosts, subredditSelector, listingSelector,
//     limitSelector, timeframeSelector, searchTermSelector,
//     changeSubreddit, changeListing, changeLimit,
//     changeTimeframe
// } from "../../../Redux/postsSlice";
// import {FilterForm} from "../FilterForm";

// export function Filter({callGetPosts}) {
    // const subreddit = useSelector(subredditSelector);
    // const listing = useSelector(listingSelector);
    // const limit = useSelector(limitSelector);
    // const timeframe = useSelector(timeframeSelector);
    // const searchTerm = useSelector(searchTermSelector);

    // // Fetches default data from initial state on mount, 
    // // and whenever the filter form is submitted:
    // const dispatch = useDispatch();
    // const callGetPosts = () => {
    //     if (searchTerm) {
    //         dispatch(getPosts(
    //             `https://www.reddit.com/${subreddit}/search.json?limit=${limit}&t=${timeframe}&q=${searchTerm}`))            
    //     } else {
    //         dispatch(getPosts(
    //             `https://www.reddit.com/${subreddit}/${listing}.json?limit=${limit}&t=${timeframe}`))
    //     }
    // }
    // useEffect(() => {
    //     callGetPosts()
    // }, []);
    
//     return (
//         <div className='postContainer flexboxContainer'>
//            <FilterForm callGetPosts={callGetPosts} />
//         </div>
//     )
// }