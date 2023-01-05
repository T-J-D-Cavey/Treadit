import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {Posts} from '../posts/Posts';
import {FailedToLoad} from './FailedToLoad';
import {Loading} from './Loading';
import {getPosts, statusSelector} from '../../Redux/postsSlice';

export function Mainpage() {

    const status = useSelector(statusSelector);

    // Fetches the default data (hiking subreddit) and changes the state on mount:
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts('r/hiking/'))
    }, []);


    // Renders different components depending on status state:
    if (status === 'failed') {
        return (
            <div className='componentContainer'>
              <FailedToLoad />
            </div>
        )
    }
    else if (status === 'loading') {
        return (
            <div className='componentContainer'>
              <Loading />
            </div>
        )
    } 
    else if (status === 'success') {
        return (
            <div className='flexboxContainer componentContainer'>
              <Posts />
            </div>
        )
    }



    // return (
    //     <div className='flexboxContainer'>
    //         <Posts />
    //     </div>
    // )
}