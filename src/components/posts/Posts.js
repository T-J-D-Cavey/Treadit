import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import { listSelector, statusSelector } from '../../Redux/postsSlice';

export function Posts() {

  const list = useSelector(listSelector);
  const status = useSelector(statusSelector);



  console.log(list);
  // I have hardcoded a limit of 20 in the postsSlice. 
  // This could be made dynamic with filter options and new state being added, 
  // and/or a 'next page' button added to the bottom of the list.


  
  return (
    <div className='flexItem postContainer'>
      {list.map((element, index) => 
      <a href={`https://www.reddit.com${element.data.permalink}`} key={index} target="_blank" className='postContainer'>
        <h3>{element.data.title}</h3>
        <p>Posted by <span>{element.data.author}</span></p>
      </a> )}
    </div>
  )  
  // 

}