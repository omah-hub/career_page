import React from "react";
import './our-values.css'
import ourvalue from "../../../assets/images/ourvalues.jpg";
import numberOne from "../../../assets/images/number-one.png";
import numberThree from "../../../assets/images/number-three.png";
import numberTwo from "../../../assets/images/number-two.png";
import numberFour from "../../../assets/images/number-four.png"
import numberFive from "../../../assets/images/number-five.png"
import numberSix from "../../../assets/images/number-six.png"

class OurValues extends React.Component {
    render() {
        return(
            <section className="our-values">
                <div className="container">
                    <div className="our-values-content">
                        <h1 className="our-values-text">Our Values</h1>
                        <p className="our-values-subheading">Our guiding principles</p>
                    <div className="value-item-container">
                        <div className="value-item">
                            <div className="value-item-icon">
                                <img src={numberOne} alt=""/>
                            </div>
                            <div>
                                <h1>Deep Dive</h1>
                                <p>We believe great service goes beyond quick fixes. At BuyPower, we dig deep to understand the root of every challenge,
                                whether it’s a payment issue, a token delay, or improving our platform. </p>
                            </div>
                        </div>
                        <div className="value-item">
                            <div className="value-item-icon">
                                <img src={numberTwo} alt=""/>
                            </div>
                            <div>
                                <h1>Empathy</h1>
                                <p>We design with users in mind. From our engineers to our support team, 
                                everyone at BuyPower is dedicated to understanding and solving real-world energy challenges for everyday Nigerians.</p>
                            </div>
                        </div>
                        <div className="value-item">
                            <div className="value-item-icon">
                                <img src={numberThree} alt=""/>
                            </div>
                            <div>
                                <h1>Customer Obsession</h1>
                                <p>Our customers are at the heart of every decision we make. We listen, learn, and 
                                constantly improve because your convenience, comfort, and trust matter most.</p>
                            </div>
                        </div>
                        <div className="value-item">
                            <div className="value-item-icon">
                                <img src={numberFour} alt=""/>
                            </div>
                            <div>
                                <h1>Team Work</h1>
                                <p>We win as a team. We value collaboration over competition, and we leave titles at the door to get the job done faster, smarter, and better.</p>
                            </div>
                        </div>
                        
                        <div className="value-item">
                            <div className="value-item-icon">
                                <img src={numberFive} alt=""/>
                            </div>
                            <div>
                                <h1>Integrity</h1>
                                <p>We operate with transparency, professionalism, and honesty. Whether it’s code, content, or customer care, trust is our strongest currency.</p>
                            </div>
                        </div>
                        <div className="value-item">
                            <div className="value-item-icon">
                                <img src={numberSix} alt=""/>
                            </div>
                            <div>
                                <h1>Ownership</h1>
                                <p> We take responsibility for our work, our actions, and our results. When things go wrong, we own the problem and fix it without excuses. We hold ourselves accountable to deliver the best possible experience for you.</p>
                            </div>
                        </div>
                    </div>
                       
                    </div>
                    <div className="our-values-img-container">
                        <img src={ourvalue}/>
                    </div>
                </div>
            </section>
           
        )
    }
}

export default OurValues;