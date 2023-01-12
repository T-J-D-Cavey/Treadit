import { useSelector } from 'react-redux';

import {listSelector} from '../../Redux/postsSlice';
import mountainWithIcon3 from '../../resources/images/mountainWithIcon3.jpg';
import commentIcon from '../../resources/images/commentIcon.svg';
import thumbsUpIcon from '../../resources/images/thumbsUpIcon.svg';

export function Posts() {

  const list = useSelector(listSelector);

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
  
  return (
    <div className='gridContainer'>
      {list.map((element, index) => 
      <div key={index}  className='gridItem'>
        <div className='postSection'>
          <p>Posted by <span ><a href={`https://www.reddit.com/user/${element.data.author}/`} id='author' target="_blank">{element.data.author}</a></span>
          <span>    {timeConverter(element.data.created)}</span></p>
        </div>
        <h3 className='postSection'><a href={`https://www.reddit.com${element.data.permalink}`} target="_blank">{element.data.title}</a></h3>
        
        
        {element.data.is_video ? 
        <a className='CenterOneChild' href={`https://www.reddit.com${element.data.permalink}`} target="_blank"><img src={mountainWithIcon3} alt='' className='postImage'/></a>
        : <span className='displayNone'>hidden</span>}
        {element.data.is_gallery ? <a className='CenterOneChild' href={`https://www.reddit.com${element.data.permalink}`} target="_blank"><img src={element.data.thumbnail} alt='' className='postThumbnail'/></a>
        : <span className='displayNone'>hidden</span>}
        {element.data.post_hint === 'image' ? 
        <a className='CenterOneChild' href={`https://www.reddit.com${element.data.permalink}`} target="_blank"><img src={element.data.url} alt='' className='postImage'/></a> 
        : <a className='CenterOneChild' href={`https://www.reddit.com${element.data.permalink}`} target="_blank"><p className='descriptionText'>{element.data.selftext}</p></a>}


        <div className='postSection'>
          <img className='commentIcon' src={commentIcon} alt=''/>
          <span>{element.data.num_comments === 1 ? 
          `  ${element.data.num_comments} comment`   
          : 
          `  ${element.data.num_comments} comments`}  </span>
          <img className='commentIcon' src={thumbsUpIcon} alt=''/>
          <span>  {element.data.ups} upvotes</span>
        </div>
      </div> )}
    </div>
  ) 
     
  
  }
  
  