import React from "react";
import "./humans.css";
import profile from "../../../assets/images/Daniel.png";


class Humans extends React.Component {
    render() {
        return(
            <section>
                <div className="profile-container">
                    <h2>Humans at Buypower</h2>
                    <p>What they are saying</p>
                    <div className="profile-content">
                        <div className="profile-image">
                            <div className="profile-stack">
                                <div className="stack-layer-3" />
                                <div className="stack-layer-2" />
                                <div className="stack-layer-1">
                                    <img src={profile} alt=""/>
                                    <h4>Daniel</h4>
                                    <span>Growth</span>
                                    </div>
                            </div>
                            
                        </div>
                        <div className="quote">
                            <p>Working at BuyPower feels like being part of something that truly 
                                matters. Every week, I get to create stories, strategies, and
                                 content that spark reactions. I feel challenged, trusted, and 
                                 motivated here. BuyPower isn’t just a workplace; it’s a team driven
                                  by purpose and powered by creativity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Humans;