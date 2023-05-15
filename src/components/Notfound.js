import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import redditIcon from '../resources/images/redditIcon.svg';

export function Notfound() {
    

    // Changes URL to redirect visitor to the mainpage after 3 seconds:
    const navigate = useNavigate();
    useEffect(() => {
        const interval = setInterval(() => {
            navigate('/');
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div>
            <h3 className='centered'>Page not found</h3>
            <p className='centered'>Redirecting you in a few moments</p>
            <div className='flex'>
                <img className='spinnerContainer' src={redditIcon} alt=''/>  
            </div>  
         </div>
    )
}




    

