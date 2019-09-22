import React from 'react';
import './Contact.css';

export default function Contact() {

    return (
        <div className='contact_container'>
            <div className='contact-div'>
                <b>Contact Us</b>
            </div>
            <div className='location'>
                <p className='location-text'>
                    Address: 230 Benmore Drive, Winter Park, Florida 32792
                    <iframe title='map' width="600" height="300" frameborder="0" src="/images/maps_shine-on.PNG" allowfullscreen></iframe>
                </p>
                <ul>
                    <li><img id='email' src='/images/email.png'alt='email'></img><a id='email-link' href='mailto:sanya@shineonorlando.com'>sanya@shineonorlando.com</a></li>
                    <li><img id='phone' src='/images/phone-receiver.png' alt='phone'></img><a id='phone-link' href='Tel: 260-632-7077'>(260) 632-7077</a></li>
                </ul>
            </div>
        </div>
    );
}