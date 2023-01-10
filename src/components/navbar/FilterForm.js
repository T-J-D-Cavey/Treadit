import { useDispatch, useSelector} from 'react-redux';

import {
    subredditSelector, listingSelector,
    limitSelector, timeframeSelector, changeSubreddit, 
    changeListing, changeLimit, changeTimeframe
} from '../../Redux/postsSlice';

export function FilterForm({callGetPosts}) {

    const dispatch = useDispatch();
    const subreddit = useSelector(subredditSelector);
    const listing = useSelector(listingSelector);
    const limit = useSelector(limitSelector);
    const timeframe = useSelector(timeframeSelector);

// Changes subreddit state:
   const subredditOnChange = (event) => {
     event.preventDefault();
     dispatch(changeSubreddit(event.target.value))
   }
// Changes listing state:
   const listingOnChange = (event) => {
     event.preventDefault();
     dispatch(changeListing(event.target.value))
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
// Calls getPosts to when filter is submitted
    const handleFormSubmit = (event) => {
     event.preventDefault();
     callGetPosts();
   }

    return (
        <div className='componentContainer'>
            <form className='filterForm' onSubmit={handleFormSubmit}>
                <div className='filterItem'>
                    <label htmlFor='subreddit' className='marginRight'>Subreddit:</label>
                    <select id='subreddit' value={subreddit} onChange={subredditOnChange}>
                        <option>r/hiking</option>
                        <option>r/Adventures</option>
                        <option>r/Mountaineering</option>
                        <option>r/Alpinism</option>
                        <option>r/Climbing</option>
                        <option>r/SearchAndRescue</option>
                        <option>r/First_Aid</option>
                        <option>r/WildernessMedicine</option>
                        <option>r/Backpacking</option>
                        <option>r/WildernessBackpacking</option>
                        <option>r/TrailGuides</option>
                        <option>r/Travel</option>
                        <option>r/Camping </option>
                        <option>r/CampingandHiking</option>
                        <option>r/Campinggear</option>
                        <option>r/GearTrade </option>
                        <option>r/GoPro</option>
                        <option>r/UltraLight</option>
                        <option>r/Trailmeals</option>
                        <option>r/HikerTrashMeals</option>
                        <option>r/Survival</option>
                    </select>
                </div>
                <div className='filterItem'>
                   <label htmlFor='listing' className='marginRight'>Listing:</label>
                   <select id='listing' value={listing} onChange={listingOnChange}>
                       <option>hot</option>
                       <option>top</option>
                       <option>new</option>
                       <option>controversial</option>
                   </select>
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
                   <label htmlFor='timeframe' className='marginRight'>Since:</label>
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