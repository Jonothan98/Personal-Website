import React from 'react';
import Nav from 'react-bootstrap/Nav';
import "./Footer.css";

function Footer() {
    return (
        <footer className='footer-container'>
            <hr className='solid'></hr>
            Footer
            <div className='footer-nav-container'>
                <h2>Where to:</h2>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="projects">Projects</Nav.Link>
                <Nav.Link href="about-me">About</Nav.Link>
                <Nav.Link href="contact">Contact</Nav.Link>
            </div>
            <div className='footer-links-container'>
                <h2>Links:</h2>
                <a href='https://www.linkedin.com/in/jonothan-castillo-a36a58190/' target='_blank' rel='noreferrer'>
                    <i className="bi bi-linkedin"> </i>
                </a>
                <br />
                <a href='https://github.com/Jonothan98' target='_blank' rel='noreferrer'>
                    <i className="bi bi-github"> </i>
                </a>
            </div>
            <div className='footer-contact-container'>
                <h2>Contact Me:</h2>
                <a href="mailto:jonothan.x.castillo@gmail.com" className='contact-link-text' target='_blank' rel='noreferrer'>
                    <i className="bi bi-envelope"> </i>
                    jonothan.x.castillo@gmail.com
                </a>
            </div>
        </footer>
    )
}

export default Footer