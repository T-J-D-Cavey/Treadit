import { useSelector } from 'react-redux';

import {Posts} from '../posts/Posts';
import {FailedToLoad} from './FailedToLoad';
import {Loading} from './Loading';
import {statusSelector} from '../../Redux/postsSlice';

export function Mainpage() {

    const status = useSelector(statusSelector);

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
              {/* <Posts /> */}
              <FailedToLoad />
            </div>
        )
    }
}