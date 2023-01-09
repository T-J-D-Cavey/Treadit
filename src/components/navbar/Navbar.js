import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';

import {
    getPosts, subredditSelector, listingSelector,
    limitSelector, timeframeSelector, searchTermSelector, 
    searchbarSelector, filterSelector, setSearchbar, setFilter
} from '../../Redux/postsSlice';
import {SearchBar}  from './SearchBar';
import { FilterForm } from './FilterForm';

export function Navbar() {

    const subreddit = useSelector(subredditSelector);
    const listing = useSelector(listingSelector);
    const limit = useSelector(limitSelector);
    const timeframe = useSelector(timeframeSelector);
    const searchTerm = useSelector(searchTermSelector);
    const searchbar = useSelector(searchbarSelector);
    const filter = useSelector(filterSelector);

    // Fetches default data from initial state on mount, 
    // and whenever the filter form / search bar is submitted:
    const dispatch = useDispatch();
    const callGetPosts = () => {
        if (searchTerm) {
            dispatch(getPosts(
                `https://www.reddit.com/${subreddit}/search.json?limit=${limit}&t=${timeframe}&q=${searchTerm}`))            
        } else {
            dispatch(getPosts(
                `https://www.reddit.com/${subreddit}/${listing}.json?limit=${limit}&t=${timeframe}`))
        }
    }
    useEffect(() => {
        callGetPosts()
    }, []);

// Toggles searchbar and filter components by changing state, so only one or none can appear at any given time:
    const searchbarHandler = (event) => {
        event.preventDefault();
        if (filter) {        
            dispatch(setFilter());
        }
        dispatch(setSearchbar());
    }

    const filterHandler = (event) => {
        event.preventDefault();
        if (searchbar) {
            dispatch(setSearchbar());
        }
        dispatch(setFilter());
    }

    return (
        <div className='flexContainer'>
            <div>Logo</div>
            <div>
                <button onClick={searchbarHandler}>searchbar icon</button>
                <button onClick={filterHandler}>filter icon</button>
            </div>
            {searchbar? <SearchBar callGetPosts={callGetPosts}/> : <span className='displayNone'>hidden</span>}
            {filter? <FilterForm callGetPosts={callGetPosts} /> : <span className='displayNone'>hidden</span>}   
        </div>
    )
}