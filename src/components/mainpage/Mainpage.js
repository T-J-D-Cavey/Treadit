import { useSelector } from 'react-redux';

import {Posts} from '../posts/Posts';
import {FailedToLoad} from './FailedToLoad';
import {Loading} from './Loading';
import {statusSelector} from '../../Redux/postsSlice';
import mountainTitleIcon from '../../resources/images/mountainTitleIcon.svg'

export function Mainpage() {

    const status = useSelector(statusSelector);

    // Renders different components depending on status state:
    if (status === 'failed') {
        return (
            <div>
                <FailedToLoad />
            </div>
        )
    }
    else if (status === 'loading') {
        return (
            <div>
              <Loading />
            </div>
        )
    } 
    else if (status === 'success') {
        return (
            <div>
                <div className='flex intro'>
                    <h1 className='title'>Treadit</h1>
                    <img className='titleBackground' src={mountainTitleIcon} alt='mountain'/>
                    <p>Find the best hiking reddit posts</p>                   
                </div>
              <Posts />
            </div>
        )
    }
}