import {useSelector} from 'react-redux';

import {subredditSelector} from '../../Redux/postsSlice';
import { SearchBar } from './SearchBar';

export function Navbar() {

    const subreddit = useSelector(subredditSelector);
    return (
        <div className='flexContainer'>
            <div>Logo</div>
            <SearchBar />
            <h3>{`/${subreddit}`}</h3>
        </div>
    )
}