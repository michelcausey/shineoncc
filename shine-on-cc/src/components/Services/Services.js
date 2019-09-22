import React from 'react';
import './Services.css';

export default function Services() {

    return (
        <div className='services_container'>
            <div className='services-div'>
                <b>Services</b>
            </div>
            <div className='services'>
                <h2>Therapy Modalities</h2>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
                <h3>Individual Therapy Sessions</h3>
                <ul>
                    <li>Mood Disorders</li>
                    <li>Depression & Anxiety Management</li>
                    <li>Trauma / PTSD</li>
                    <li>Substance Use, Addiction, & Recovery</li>
                </ul>
                <h3>Child & Adolescent Counseling</h3>
                <ul>
                    <li>Self-Esteem & Resiliency</li>
                    <li>Stress, Anger, & Anxiety Management</li>
                    <li>Trauma</li>
                    <li>Substance Use</li>
                </ul>
                <h3>Family Therapy Sessions</h3>
                <ul>
                    <li>Behavior Management</li>
                    <li>Parenting & Co-Parenting</li>
                    <li>Communication</li>
                    <li>Family Discord</li>
                </ul>
                <h3>Group Therapy Sessions</h3>
                <p>
                    Shine On Counseling & Consulting is currently screening prospective clients for an 8-week adolescent group, and a 6-week adult group.
                </p>
            </div>
        </div>
    );
}
