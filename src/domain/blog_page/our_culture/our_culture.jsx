import React from "react";
import CultureCard from "./card_component/card_component";
import './our_culture.css';
import Innovation from "../../../assets/images/innovation-icon.png"
import Growth from "../../../assets/images/growth-icon.png";
import Customer from "../../../assets/images/customer-centric-icon.png"

class OurCulture extends React.Component {
    render() {
        return(
            <section className="our-culture">
                <div className="container">
                    <h1 className="our-culture-title">Our Culture</h1>
                    <p className="our-culture-text">Fostering a culture of innovation</p>
                </div>
                <div className="our-culture-content">
                    <CultureCard
                    icon={Customer}
                    title="Customer Centric Mindset"
                    description="Our users are at the heart of everything we build. From UI flows to backend systems,
                        our mission is to simplify utility payments and deliver real value with every tap."
                    />

                    <CultureCard
                    icon={Innovation}
                    title="Innovation-First Culture"
                    description="We don’t wait for change, we create it. We’re always exploring smarter, 
                        faster, and more intuitive ways to serve millions across Nigeria."
                    />

                    <CultureCard
                    icon={Growth}
                    title="Growth, through excellence"
                    description="We believe in progress over perfection. Every team member is encouraged to learn,
                        evolve, and push boundaries to unlock their full potential."
                    />
                    
                    
                </div>
            </section>
        )
    }
        
}

export default OurCulture;