import { useSelector } from 'react-redux';

import {listSelector} from '../../Redux/postsSlice';
import redditIcon from '../../resources/images/redditIcon.svg';
import videoIcon from '../../resources/images/videoIcon.svg';

export function Posts() {

  const list = useSelector(listSelector);

  console.log(list);

// Converts UTC/UNIX timestamp into a date and time:
  const timeConverter = (UNIX_timestamp) => {
    let a = new Date(UNIX_timestamp * 1000);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let rawHours = a.getHours();
    let hour;
    rawHours <10 ? hour = `0${rawHours}` : hour = rawHours;
    let rawMinutes = a.getMinutes();
    let min;
    rawMinutes <10 ? min = `0${rawMinutes}` : min = rawMinutes;
    let time = `${date} ${month} ${year} ${hour}:${min}`;
    return time;
  }

  // I have hardcoded a limit of 20 in the postsSlice. 
  // This could be made dynamic with filter options and new state being added, 
  // and/or a 'next page' button added to the bottom of the list.
  
  return (
    <div className='flexItem postContainer'>
      {list.map((element, index) => 
      <div key={index}  className='postContainer'>
        <div className='flexboxContainer postSection'>
          <p>Posted by <span><a href={`https://www.reddit.com/user/${element.data.author}/`} target="_blank">{element.data.author}</a></span>
          <span>    {timeConverter(element.data.created)}</span></p>
        </div>
        <h3 className='postSection'><a href={`https://www.reddit.com${element.data.permalink}`} target="_blank">{element.data.title}</a></h3>
        {element.data.post_hint === 'image' ? 
        
        <a href={`https://www.reddit.com${element.data.permalink}`} target="_blank"><img src={element.data.url} alt='' className='postImage'/></a> 
        : 
        <a href={`https://www.reddit.com${element.data.permalink}`} target="_blank"><p>{element.data.selftext}</p></a> }

        <div className='flexboxContainer postSection'>
          {/* Will add a comments box svg here */}
          <p>{element.data.num_comments === 1 ? 
          `${element.data.num_comments} comment` 
          : 
          `${element.data.num_comments} comments`}<span> {element.data.ups} upvotes</span></p>
        </div>
      </div> )}
    </div>
  )  
   

}



// return (
//   <div className='flexItem postContainer'>
//     {list.map((element, index) => 
//     <div key={index}  className='postContainer'>
//       <div className='flexboxContainer postSection'>
//         <p>Posted by <span><a href={`https://www.reddit.com/user/${element.data.author}/`} target="_blank">{element.data.author}</a></span>
//         <span>    {timeConverter(element.data.created)}</span></p>
//       </div>
//       <h3 className='postSection'><a href={`https://www.reddit.com${element.data.permalink}`} target="_blank">{element.data.title}</a></h3>
//       {element.data.post_hint === 'image' ? 
      
//       <a href={`https://www.reddit.com${element.data.permalink}`} target="_blank"><img src={element.data.url} alt='' className='postImage'/></a> 
//       : 
//       <a href={`https://www.reddit.com${element.data.permalink}`} target="_blank"><p>{element.data.selftext}</p></a> }

//       <div className='flexboxContainer postSection'>
//         {/* Will add a comments box svg here */}
//         <p>{element.data.num_comments === 1 ? 
//         `${element.data.num_comments} comment` 
//         : 
//         `${element.data.num_comments} comments`}<span> {element.data.ups} upvotes</span></p>
//       </div>
//     </div> )}
//   </div>
// )