import React from 'react';
import './NewClients.css';

export default function ExistingClient() {

    return (
        <div className='container'>
            <div className='client-portal'>
                <a className='existing-link' href='https://shineonorlando.securepatientarea.com/portal/index/' target='_blank' rel="noopener noreferrer">
                    <button className='existing-button'>Existing Clients - Click Here to Log-In</button>
                </a>
            </div>
        </div>
    );
}