import React from 'react';
import Button from 'react-bootstrap/Button';
import "./Projects.css";

function Projects() {
  return (
    <div className='projects-container'>
      <div className='projects-title'>
        <h1>Projects</h1>
      </div>
      <div className='project-card-container'>
        <div className='image-container'>
          <img className="card-image" src='https://img.itch.zone/aW1hZ2UvNTA3MDIwLzI3MTkzNzQuanBn/347x500/TBn0w1.jpg' alt='Journey Down thumbnail'></img>
        </div>
        <div className='card-text'>
          <h2>Journey Down</h2>
          <p>
            The goal for Journey Down was to make a easy RPG mobile game with the focus of one hand play and randomized loot. <br></br><br></br>
            I worked on the combat system for this while my partner Marvin Jung worked on the randomized loot system. <br></br><br></br>
            What I learned from this project is how important communication is in development. When it came time to put our systems together we have come to realize my combat system and Marin's loot system were incompatiable making it very difficult to put them together. <br></br>
            You can download and play it from my itch.io page.
          </p>
          <div className='card-button'>
            <Button href="https://jonothan98.itch.io/journeydown" target='_blank'>Journey Down</Button>
          </div>
        </div>
      </div>
      <div className='project-card-container'>
        <div className='image-container'>
          <img className="card-image" src='https://img.itch.zone/aW1nLzMzMTY5MTYucG5n/original/mN%2BHH0.png' alt='Journey Down thumbnail'></img>
        </div>
        <div className='card-text'>
          <h2>Terror in Herrington</h2>
          <p>
            The goal for Terror in Herrington was to make a top down adventure game with the focus of exploring. <br></br><br></br>
            This was my second project in Unity and worked in a team of 3. I did the programming for this project. Another did the art and the last member was the leader in charge of helping some with both art and programming and keeping us on schedule. <br></br><br></br>
            What I learned from this project is how to use the tile system and pixel art systems in Unity, and how important the pixel count is for implementing pixel art<br></br>
            You can download and play it from my itch.io page.
          </p>
          <div className='card-button'>
            <Button href="https://jonothan98.itch.io/terror-in-herrington" target='_blank'>Terror in Herrington</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects