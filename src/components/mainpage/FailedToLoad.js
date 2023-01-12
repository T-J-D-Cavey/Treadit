import redditIcon from '../../resources/images/redditIcon.svg';

export function FailedToLoad() {
    
    return (
        <div >
            <h3 className='centered'>Failed to load content.</h3>
            <p className='centered'>Refresh your browser or check your internet connection.</p>
            <div className='flex'>
                <img className='spinnerContainer' src={redditIcon} alt=''/>
            </div>
        </div>
    )
}