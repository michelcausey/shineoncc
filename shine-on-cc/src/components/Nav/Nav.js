import React from 'react';
import './Nav.css';


export default function Nav() {

    return (
        <nav className='navbar'>
            <img id='small-logo' src='\images\shine-on-logo_large.jpg' alt='small-logo'></img>
            <a href='https://shineonorlando.securepatientarea.com/portal/index/'><button>Existing Client Portal</button></a>
        </nav>
    );
}