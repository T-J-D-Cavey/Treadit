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
            <form onSubmit={handleFormSubmit}>
              <label htmlFor='subreddit'>Subreddit:</label>
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
              <label htmlFor='listing'>Listing:</label>
              <select id='listing' value={listing} onChange={listingOnChange}>
                  <option>hot</option>
                  <option>top</option>
                  <option>new</option>
                  <option>controversial</option>
              </select>
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