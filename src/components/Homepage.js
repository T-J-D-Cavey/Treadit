import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {Posts} from './posts/Posts';
import {getPosts} from '../Redux/postsSlice';

export function Homepage() {

    // Fetches the default data (hiking subreddit) and changes the state on mount:
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts('r/hiking/'))
    }, []);

    return (
        <div className='flexboxContainer'>
            <Posts />
        </div>
    )
}