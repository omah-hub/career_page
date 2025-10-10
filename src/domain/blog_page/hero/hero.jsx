import React from "react";
import './hero.css'

class Hero extends React.Component {
  render() {
    return (
      
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Powering Lives, Fuelling Careers</h1>
            <p className="hero-subtitle">Learn. Grow. Collaborate</p>
            <div><button className="cta-button">See Open Roles</button></div>
          </div>
        </div>
      </section>
        
    );
  }
}

export default Hero;
