import React from 'react';
import './Footer.css';


export default function Footer() {

    return (
    <div >
        <nav className='footer'>
            
        <div className='footer'>
            <div id="item1">
                <h3 id='h3Footer'>Office Hours</h3>
                <ul>
                    Sunday : 10AM - 6PM<br></br>
                    Monday : 10AM - 6PM<br></br>
                    Tuesday : 10AM - 6PM<br></br>
                    Wednesday : 10AM - 6PM<br></br>
                    Thursday : 10AM - 6PM<br></br>
                </ul>
            </div>

            <div id="item2">
                <h3 id='h3Footer'>Location</h3>
                <ul>
                    260 Benmore Drive
                    Winter Park, FL 32792
                </ul>
            </div>

            <div id="item3">
                <h3 id='h3Footer'>Email & Phone</h3>
                <ul>
                    sanya@shineonorlando.com<br></br>
                    (260) 632-7077<br></br>
                </ul>
            </div>
        </div>
        </nav>
        
    </div>
    );
}