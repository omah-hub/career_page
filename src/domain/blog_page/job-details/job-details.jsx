import React from "react";
import "./job-details.css";
import logo from "../../../assets/images/footer-logo.png";
import { IoIosArrowForward } from "react-icons/io";
import { TbPointFilled } from "react-icons/tb";



class  JobDetails extends React.Component {
    render () {
        return (
            <div className="job-details-container">
                <div>
                    <img src={} alt=""/>
                </div>
                <div>
                    <p>Careers</p>
                <IoIosArrowForward/>
                <p>details</p>
                </div>
                <div>
                    <h2>Customer Support Associate</h2>
                    <button>Apply For This Job</button>
                </div>
                <div>
                    <p>Customer Support</p>
                    <p>Onsite</p>
                    <p>Abuja</p>
                </div>
                <div>
                    <h2>About Us</h2>
                    <p>BuyPower is simplifying consumer payments in Nigeria starting with utilities and 
                        enabling energy access across Africa. We are building the next generation of energy services in Nigeria.
                         We’ve made a lot of progress but are yet to scratch the potentials within the consumer payment space.
                          We are a team of smart and energetic people that’s changing the way consumer payments work in Nigeria.
                           We believe that we’ll win by getting the best talent on our team, as mediocre teams do not build great companies.
                            Working with BuyPower is an opportunity to make an impact in a young team and do work that really matters. </p>
                </div>
                <div>
                    <h2>The Opportunity </h2>
                    <p>A Customer Service Representative, or CSR, will act as a liaison, provide product/services information, answer questions, 
                        and resolve any emerging problems that our customer accounts might face with accuracy and efficiency.
The best CSRs are genuinely excited to help customers. They’re patient, empathetic, and passionately communicative. 
They love to talk and understand the value of good communication skills. Customer service representatives can
 put themselves in their customers’ shoes and advocate for them when necessary. Customer feedback is priceless, and
  these CSRs can gather that for you. Problem-solving also comes naturally to customer care specialists. 
They are confident at troubleshooting and investigate if they don’t have enough information to 
answer customer questions or resolve complaints. </p>
                </div>
                <div>
                    <h2>Responsibilities</h2>
                 </div>

            </div>
        )
    }
}

export default JobDetails