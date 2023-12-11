import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Footer.css";

function Footer() {
    return (
        <footer className='footer-container'>
            <hr className='solid'></hr>
            <div className='container'>
                <Row md={3}>
                    <Col>
                        <p>Where to:</p>
                        <ul>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="projects">Projects</Nav.Link>
                            <Nav.Link href="about-me">About</Nav.Link>
                            <Nav.Link href="contact">Contact</Nav.Link>
                        </ul>
                    </Col>
                    <Col>
                        <p>Social:</p>
                        <ul>
                            <a href='https://www.linkedin.com/in/jonothan-castillo-a36a58190/' className='contact-link-text' target='_blank' rel='noreferrer'>
                                <i className="bi bi-linkedin"> </i>
                                LinkedIn
                            </a>
                            <br />
                            <a href='https://github.com/Jonothan98' className='contact-link-text' target='_blank' rel='noreferrer'>
                                <i className="bi bi-github"> </i>
                                Github
                            </a>
                        </ul>
                    </Col>
                    <Col>
                        <p>Contact Me:</p>
                        <ul>
                            <a href="mailto:jonothan.x.castillo@gmail.com" className='contact-link-text' target='_blank' rel='noreferrer'>
                                <i className="bi bi-envelope"> </i>
                                jonothan.x.castillo@gmail.com
                            </a>
                        </ul>
                    </Col>
                </Row>
            </div>
        </footer>
    )
}
export default Footer
