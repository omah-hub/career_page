import React from "react";
import './hero_page.css'

class Blog extends React.Component {
  render() {
    return (
       <main className="main">
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">Powering Lives, Fuelling Careers</h1>
                        <p className="hero-subtitle">Learn. Grow. Collaborate</p>
                        <button className="cta-button">See Open Roles</button>
                    </div>
                </div>
            </section>
        </main>
    );
  }
}

export default Blog;
