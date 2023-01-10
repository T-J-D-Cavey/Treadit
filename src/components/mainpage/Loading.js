import spinnerIcon from '../../resources/images/spinnerIcon.svg'

export function Loading() {
    // Replace with an Icon and a className which will have transitions added to create a loading spinner:
    return (
        <div className='spinnerContainer'>
            <img className='spinner' src={spinnerIcon} alt=''/>
        </div>
    )
}