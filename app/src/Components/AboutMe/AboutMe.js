import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./AboutMe.css";

function AboutMe() {
    return (
        <div className='about-me-container'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                    <Card.Title>Web Developer Skills</Card.Title>
                    <Card.Text>
                        I have experience with web development mainly using the React framework for website creation.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>React</ListGroup.Item>
                    <ListGroup.Item>Javascript</ListGroup.Item>
                    <ListGroup.Item>HTML & CSS</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                    <Card.Title>Object Oriented Programs</Card.Title>
                    <Card.Text>
                        I have the most experience in Java when working on the back end of website, have experience in C++, and have me games using C#.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Java</ListGroup.Item>
                    <ListGroup.Item>C#</ListGroup.Item>
                    <ListGroup.Item>C++</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                    <Card.Title>Databases</Card.Title>
                    <Card.Text>
                        Most of my experience with databases have been in MySQL and I have used Springboot to access that data.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>mySQL</ListGroup.Item>
                    <ListGroup.Item>Springboot</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>

        // <div className='about-me-container'>
        //     <h1>About Me</h1>
        //     <div className='skill-container'>
        //         <h2>Skills</h2>
        //         <p>I have experience working with Javascript, React, and Java for the creation of websites</p>
        //         <p>I have experience working with object oriented programs such as Java, C++, and C#. You can even see some of the games I have worked on using C# under the projects tab</p>
        //     </div>
        //     <div>
        //         <h2>Education</h2>
        //         <p>Graduated from University of Houston in 2020</p>
        //         <p>Bachelor of Science </p>
        //         <p>Major: Digital Media</p>
        //         <p>Minor: Computer Science</p>
        //     </div>
        //     <h2>Certifications</h2>
        // </div>
    )
}

export default AboutMe