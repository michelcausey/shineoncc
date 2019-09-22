import React from 'react';
import './OurPractice.css';

export default function OurPractice() {

    return (
        <div className='ourpractice_container'>
            <div className='ourpractice-div'>
                <b>Our Practice</b>
            </div>
            <div className='existing-client-portal'>
                <a href='https://shineonorlando.securepatientarea.com/portal/index/'><button>Existing Client Portal</button></a>
            </div>
            <div className='practice-intro'>
                <p className='quote'>
                    "However long the night, the dawn will break."<br></br>
                    - African Proverb
                </p>
                <hr></hr>
                <h2 id='meet-sanya'>Meet Your Therapist: Sanya Matani, LMHC</h2>
                <img id='headshot' src='/images/Sanya+LMHC.jpg' alt='headshot'></img> 
                <p className='meet-sanya-p'>
                    Sanya Matani, LMHC is a Licensed Mental Health Counselor with the State of Florida. She began working with adolescents in 2009, through the Seminole County Operation Right Track diversion program facilitating Parent - Teen Challenge days. Sanya began working with adults in 2012; she specializes in family conflict, anxiety, depression, addiction, and has extensive training in trauma.
                </p>
                <p className='meet-sanya-p'>
                Sanya holds a Bachelor's degree in Psychology with a minor in Criminal Justice, as well as a Master's degree in Counselor Education from the University of Central Florida.  During her Master’s program, she also earned a graduate certificate in Play Therapy and has completed post-graduate training in Sand Tray and other experiential modalities.
                </p>
            </div>
        </div>
    );
}