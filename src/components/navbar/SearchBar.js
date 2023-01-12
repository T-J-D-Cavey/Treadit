import { useDispatch, useSelector } from "react-redux";

import {limitSelector, timeframeSelector, setSearchTerm,
        changeLimit, changeTimeframe } from "../../Redux/postsSlice";

export function SearchBar({callGetPostsSearch}) {

    const limit = useSelector(limitSelector);
    const timeframe = useSelector(timeframeSelector);

// To convert whitespaces into %20 and change searchterm state:
    const dispatch = useDispatch();
    const searchTermOnChange = (event) => {
        event.preventDefault();
        const term = event.target.value.replace(/\s/g, '%20');
        dispatch(setSearchTerm(term));        
    }

// Changes limit state:
    const limitOnChange = (event) => {
        event.preventDefault();
        dispatch(changeLimit(event.target.value))
    }
// Changes timeframe state:
    const timeframeOnChange = (event) => {
        event.preventDefault();
        dispatch(changeTimeframe(event.target.value))
    }

// Calls callGetPostsSearch to fetch data when searchbar (with or without a searchterm) is submitted
    const callGetPostsPlusSearchTerm = (event) => {
        event.preventDefault();
        callGetPostsSearch();
    }
        return (
            <div>
                <form className='filterForm' onSubmit={callGetPostsPlusSearchTerm}>
                    <div className='filterItem'>
                        <input className='searchbar filterItem' type='text' onChange={searchTermOnChange} placeholder='search...'/>
                    </div>
                    <div className='filterItem'>
                        <label htmlFor='limit' className='marginRight'>How many:</label>
                        <select id='limit' value={limit} onChange={limitOnChange}>
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                            <option>100</option>
                            <option>200</option>
                        </select>                        
                    </div>
                    <div className='filterItem'>
                        <label htmlFor='timeframe' className='marginRight'>Time range:</label>
                        <select id='timeframe' value={timeframe} onChange={timeframeOnChange}>
                            <option>day</option>
                            <option>week</option>
                            <option>month</option>
                            <option>year</option>
                        </select>                        
                    </div>
                    <div className='filterItem'>
                        <button className='button' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        )
}