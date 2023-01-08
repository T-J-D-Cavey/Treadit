import { useDispatch, useSelector} from 'react-redux';

import {changeSubreddit, subredditSelector} from '../../Redux/postsSlice';

export function FilterForm({callGetPosts}) {

    const dispatch = useDispatch();
    const subreddit = useSelector(subredditSelector);

   const subredditOnChange = (event) => {
    event.preventDefault();
    dispatch(changeSubreddit(event.target.value))
   }

   const handleSubmit = (event) => {
    event.preventDefault();
    callGetPosts();
   }

    return (
        <div className='componentContainer'>
            <form onSubmit={handleSubmit}>
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
              <button type='submit'>Submit</button>
            </form>
        </div>
    )

}