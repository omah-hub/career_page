import React from "react";
import "./job_details.css";
import logo from "../../../assets/images/footer-logo.png";
import { IoIosArrowForward } from "react-icons/io";
import line from "../../../assets/images/line-44.png";
import JobDetailsCard from "./job_details_card/job_details_card";
import { FaCopyright } from "react-icons/fa6";
import buypowerLogo from "../../../assets/images/buypower-logo.svg";




class  JobDetails extends React.Component {
    responsibilities = [
    "Manage large amounts of incoming phone calls",
    "Generate sales leads",
    "Identify and assess customers’ needs to achieve satisfaction",
    "Build sustainable relationships and trust with customer accounts through open and interactive communication",
    "Provide accurate, valid and complete information by using the right methods/tools",
    "Meet personal/customer service team sales targets and call handling quotas",
    "Handle customer complaints, provide appropriate solutions and alternatives within the time limits; follow up to ensure resolution",
    "Keep records of customer interactions, process customer accounts and file documents",
    "Follow communication procedures, guidelines and policies",
    "Take the extra mile to engage customers"
  ];

  requirements = [
    "Proven customer support experience or experience as a Client Service Representative",
    "Track record of over-achieving quota",
    "Strong phone contact handling skills and active listening",
    "Familiarity with CRM systems and practices",
    "Customer orientation and ability to adapt/respond to different types of characters",
    "Excellent communication and presentation skills",
    "Ability to multi-task, prioritize, and manage time effectively",
    "High school diploma"
  ];
  benefits = [
    "Proven customer support experience or experience as a Client Service Representative",
    "Track record of over-achieving quota",
    "Strong phone contact handling skills and active listening",
    "Familiarity with CRM systems and practices",
    "Customer orientation and ability to adapt/respond to different types of characters",
    "Excellent communication and presentation skills",
    "Ability to multi-task, prioritize, and manage time effectively",
    "High school diploma"
  ]
    render () {
        return (
            <div className="job-details-container">
                <div className="header-container" style={{}}>
                    <div className="header-logo">
                        <img src={buypowerLogo} alt=""/>
                    </div>
                    <div className="job-details-header">
                        <div className="career-detail-header">
                            <p className="prev">Careers</p>
                            <IoIosArrowForward style={{color: "#858589"}}/>
                            <p className="next">Details</p>
                        </div>
                        <div className="job-title-container">
                            <div className="job-name-container">
                                <h2>Customer Support Associate</h2>
                                <div className="job-nature">
                                    <p>Customer Support</p>
                                    <p>Onsite</p>
                                    <p>Abuja</p>
                                </div>
                            </div>
                            <div className="apply-button">
                                <h3>Apply For This Job</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="job-detail-content">
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
                        <p>A Customer Service Representative, or CSR, will act as a liaison,        provide product/services information, answer questions, 
                            and resolve any emerging problems that our customer accounts might face with accuracy and efficiency.
                            The best CSRs are genuinely excited to help customers. They’re patient, empathetic, and passionately communicative. 
                            They love to talk and understand the value of good communication skills. Customer service representatives can
                            put themselves in their customers’ shoes and advocate for them when necessary. Customer feedback is priceless, and
                            these CSRs can gather that for you. Problem-solving also comes naturally to customer care specialists. 
                            They are confident at troubleshooting and investigate if they don’t have enough information to 
                            answer customer questions or resolve complaints. </p>
                    </div>
                    <div>
                        <JobDetailsCard
                        responsibilities={this.responsibilities}
                        requirements={this.requirements}
                        benefits={this.benefits}
                        />
                    </div>
                   
                </div>
                <div className="apply-button-bottom">
                    <h3>Apply for this Job</h3>
                </div>
               <footer>
                    <div>
                        <p>About Us</p>
                        <img src={line} alt="" />
                        <p>Merchants</p>
                        <img src={line} alt="" />
                        <p>Private Policy</p>
                        <img src={line} alt="" />
                        <p>Terms and Conditions</p>
                    </div>
                    <div>
                        <div className="icon-container">
                            <FaCopyright className="icon"/>
                            <p>BuyPower Inc.</p>
                        </div>
                        <img src={line} alt="" />
                        <p>All rights reserved</p>
                    </div>
               </footer>

            </div>
        )
    }
}

export default JobDetails