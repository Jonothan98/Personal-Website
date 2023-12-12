import React from 'react';
import Button from 'react-bootstrap/Button';
import './LandingPage.css'
import resume from "../../Resume Jonothan Castillo.pdf"

function LandingPage() {
  return (
    <div className='landing-page-container'>
      <div className='text-container'>
        <h1 className='name'>Jonothan Castillo</h1>
        <h2 className='position'>Full-Stack Software Developer</h2>
        <p className='about-me'>
          Graduate of the University of Houston
          <br></br> A Full-stack software developer with experience in using React, Java, and MySQL.
          <br></br> Problem-solver, Team Player, Adaptable, Proactive, and Open-Minded in learning new skills.
        </p>
        <div className='resume-button'>
            <Button href={resume} target='_blank' rel='noreferrer'>Resume</Button>
          </div>
      </div>
    </div>
  );
}

export default LandingPage;

