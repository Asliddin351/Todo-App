import React from 'react'
import './backdrop.css'


function Backdrop(props) {
    return(
        <div onClick={props.hide} className='backdrop' />
    )
}

export default Backdrop;