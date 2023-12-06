import React from 'react'
import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <div className='contact-me-container'>
                <h1>Contact Me:</h1>
                <a href="mailto:jonothan.x.castillo@gmail.com" className='contact-link-text' target='_blank' rel='noreferrer'>
                    <i className="bi bi-envelope"> </i>
                    jonothan.x.castillo@gmail.com
                </a>
                <hr className='solid'></hr>
            </div>
            <div className='links-container'>
                <h1>Links:</h1>
                <a className='contact-link-text' href='https://www.linkedin.com/in/jonothan-castillo-a36a58190/' target='_blank' rel='noreferrer'>
                    <i className="bi bi-linkedin"> </i>
                    LinkedIn
                </a>
                <br />
                <a className='contact-link-text' href='https://github.com/Jonothan98' target='_blank' rel='noreferrer'>
                    <i className="bi bi-github"> </i>
                    Github
                </a>
            </div>
        </div>
    )
}

export default Contact