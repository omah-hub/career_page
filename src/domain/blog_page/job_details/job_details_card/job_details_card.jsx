import React from "react";
import { PiDotOutlineFill } from "react-icons/pi";

import "./job_details_card.css";


class  JobDetailsCard extends React.Component {
    render () {
        const { responsibilities, requirements, benefits } = this.props;
        return (
           <div className="job-detail-card">
                <section>
                    <h3>Responsibilities</h3>
                    
                        {responsibilities.map((item, index) => (
                            <div key={index}>
                                <PiDotOutlineFill className="dot-icon" />
                                <span>{item}</span>
                            </div>
                        ))}
                   

                </section>

                <section>
                    <h3>Requirements</h3>
                    
                        {requirements.map((item, index) => (
                            <div key={index}>
                            <PiDotOutlineFill className="dot-icon" />
                            <span>{item}</span>
                            </div>
                        ))}
                   

                </section>

                <section>
                    <h3>Benefits</h3>
                    
                        {benefits.map((item, index) => (
                            <div key={index}>
                            <PiDotOutlineFill className="dot-icon" />
                            <span>{item}</span>
                            </div>
                        ))}
                   

                </section>
            </div>
        )
    }
}

export default JobDetailsCard