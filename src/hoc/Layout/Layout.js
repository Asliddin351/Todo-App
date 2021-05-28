import React from 'react'
import './layout.css'
import Header from './../../components/header/header';


function Layout(props) {

    return (
        <div className='layout'>
            <Header />
            {props.children}
        </div>
    )
}

export default Layout
