import redditIcon from '../../resources/images/redditIcon.svg';

export function FailedToLoad() {
    // Needs improving: redirect isn't needed but what else...
    return (
        <div>
            <h3 className='centered'>Failed to load content.</h3>
            <p className='centered'>Refresh your browser or check your internet connection.</p>
            <img className='spinner spinnerContainer' src={redditIcon} alt=''/>
        </div>
    )
}