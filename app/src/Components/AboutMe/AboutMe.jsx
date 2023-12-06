import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./AboutMe.css";

function AboutMe() {
    return (
        <div className='about-me-container'>
            <Card style={{ width: '18rem' }} className='card-container'>
                <Card.Img variant="top" className="card-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" />
                <Card.Body>
                    <Card.Title>Web Developer Skills</Card.Title>
                    <Card.Text>
                        I have experience with web development using the React framework for website creation.
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
            <Card style={{ width: '18rem' }} className='card-container'>
                <Card.Img variant="top" className="card-image" src="https://cdn.iconscout.com/icon/free/png-512/free-java-60-1174953.png?f=webp&w=256" />
                <Card.Body>
                    <Card.Title>Object Oriented Programs</Card.Title>
                    <Card.Text>
                        I have the most experience in with working in Java, have experience in C++, and have made games using C#.
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
            <Card style={{ width: '18rem' }} className='card-container'>
                <Card.Img variant="top" className="card-image" src="https://www.svgrepo.com/show/303251/mysql-logo.svg" />
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
    )
}

export default AboutMe