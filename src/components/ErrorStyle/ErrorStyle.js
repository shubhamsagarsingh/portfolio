import './_ErrorStyle.scss'




const ErrorStyle = (props) => {
    return(
        <div className='b-error'>
            {props.children}
        </div>
    )
}



export default ErrorStyle