import { useDispatch, useSelector } from "react-redux";

import {limitSelector, timeframeSelector, setSearchTerm,
        changeLimit, changeTimeframe } from "../../Redux/postsSlice";

export function SearchBar({callGetPosts}) {

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

// Calls getPosts to when searchbar is submitted
    const callGetPostsPlusSearchTerm = (event) => {
        event.preventDefault();
        callGetPosts();
    }
        return (
            <div>
                <form onSubmit={callGetPostsPlusSearchTerm}>
                    <input type='text' onChange={searchTermOnChange} placeholder='search...'/>
                    <label htmlFor='limit'>How many:</label>
                    <select id='limit' value={limit} onChange={limitOnChange}>
                        <option>30</option>
                        <option>60</option>
                        <option>100</option>
                        <option>200</option>
                    </select>
                    <label htmlFor='timeframe'>Since:</label>
                    <select id='timeframe' value={timeframe} onChange={timeframeOnChange}>
                        <option>week</option>
                        <option>month</option>
                        <option>year</option>
                        <option>day</option>
                    </select>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
}