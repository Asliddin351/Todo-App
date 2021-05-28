import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react';
import Backdrop from './../backdrop/backdrop';

import './navbar.css'

function Navbar() {

    const [visible, setVisible] = useState(false)

    const navbarToggle = () => {
        setVisible(!visible)
    }

    const links = [
        {
            name: 'Главная',
            url: '/'
        },
        {
            name: 'О нас',
            url: '/about'
        },
        {
            name: 'Контакты',
            url: '/contacts'
        }
    ]
    
    return (
        <nav className='navbar'>
            <button className='navbar__toggle' onClick={navbarToggle}>
                <i className='fas fa-bars'></i>
            </button>

            {visible === true ? <Backdrop hide={navbarToggle}/> : null}

            <ul className={`navbar__list ${visible === true ? 'navbar__list--show' : ''}`}>
                {links.map(function(link, index){
                    return(
                         <li key={index} className="navbar__item">
                            <Link className="navbar__link" to={link.url} onClick={navbarToggle}>{link.name}</Link>
                        </li>
                    )
                })}
                
            </ul>
        </nav>
    )
}


export default Navbar

