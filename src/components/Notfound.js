import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function Notfound() {
    

    // Changes URL to redirect visitor to the homepage after 3 seconds:
    const navigate = useNavigate();
    useEffect(() => {
        const interval = setInterval(() => {
            navigate('/');
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div>Not found component</div>
    )
}




    

