import spinnerIcon from '../../resources/images/spinnerIcon.svg'

export function Loading() {
    return (
        <div className='spinnerContainer'>
            <img className='spinner' src={spinnerIcon} alt='loading'/>
        </div>
    )
}