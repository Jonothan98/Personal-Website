import React from 'react';
import Button from 'react-bootstrap/Button';
import "./Projects.css";

function Projects() {
  return (
    <div className='projects-container'>
      <div className='card-container'>
        <div className='image-container'>
          <img className="card-image" src='https://img.itch.zone/aW1hZ2UvNTA3MDIwLzI3MTkzNzQuanBn/347x500/TBn0w1.jpg' alt='Journey Down thumbnail'></img>
        </div>
        <div className='card-text'>
          <h1>Journey Down</h1>
          <p>
            The goal for Journey Down was to make a easy RPG mobile game with the focus of one hand play and randomized loot. <br></br><br></br>
            I worked on the combat system for this while my partner Marvin Jung worked on the randomized loot system. <br></br><br></br>
            What I learned from this project is how important communication is in development. When it came time to put our systems together we have come to realize my combat system and Marin's loot system were incompatiable making it very difficult to put them together. <br></br>
            You can download and play it from my itch.io page.
          </p>
        </div>
        <div className='card-button'>
          <Button href="https://jonothan98.itch.io/journeydown" target='_blank'>Journey Down</Button>
        </div>
      </div>
      <div className='card-container'>
        <div className='image-container'>
          <img className="card-image" src='https://img.itch.zone/aW1nLzMzMTY5MTYucG5n/original/mN%2BHH0.png' alt='Journey Down thumbnail'></img>
        </div>
        <div className='card-text'>
          <h1>Terror in Herrington</h1>
          <p>
            The goal for Terror in Herrington was to make a top down adventure game with the focus of exploring. <br></br><br></br>
            This was my second project in Unity and worked in a team of 3. I did the programming for this project. Another did the art and the last member was the leader in charge of helping some with both art and programming and keeping us on schedule. <br></br><br></br>
            What I learned from this project is how to use the tile system and pixel art systems in Unity, and how important the pixel count is for implementing pixel art<br></br>
            You can download and play it from my itch.io page.
          </p>
        </div>
        <div className='card-button'>
          <Button href="https://jonothan98.itch.io/terror-in-herrington" target='_blank'>Terror in Herrington</Button>
        </div>
      </div>
    </div>
    /* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Journey Down</Card.Title>
        <Card.Text>
          The goal for this project was to make a easy RPG mobile game with the focus of one hand play and randomized loot. The team for this project consisted of Marvin Jung and I, both of us had to learn Unity and C# for this project. I was in charge of the combat for the game while Marvin worked on creating the randomized loot system.
          What I learned from this project was how important communication is between people when working on the project. Marvin made a loot system and I made a combat system, when working on it we were both doing our own thing not communicating. When it came to put them together none of our systems were compatible which made it difficult to put together.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Terror in Harrington</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> */
  )
}

export default Projects