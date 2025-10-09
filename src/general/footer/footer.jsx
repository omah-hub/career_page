import React from "react";
import "./footer.css";
import footerLogo from "../../assets/images/buypower-logo.svg";
import { FaInstagramSquare } from "react-icons/fa";
import faceBook from "../../assets/images/facebook-icon.png";
import Instagram from "../../assets/images/instagram-icon.png";
import youtube from "../../assets/images/youtube-logo.png";
import twitter from "../../assets/images/twitter-logo.png";


class Footer extends React.Component {
    render() {
        return (
            <main className="footer-container">
                <div className="footer-logo-content">
                    <img src={footerLogo} alt="" className="logo"/>
                   <div className="logos">
                        <img src={Instagram} alt=""/>
                        <img src={faceBook} alt=""/>
                        <img src={youtube} alt=""/>
                        <img src={twitter} alt=""/>
                   </div>
                </div>
                
                <div className="footer-information">
                    <div style={{textWrap: "nowrap"}}>
                        <h3>Products</h3>
                        <p>Buy Electricity</p>
                        <p>Buypower for Business</p>
                        <p>Payable</p>
                        <p>Buypower Surge</p>
                    </div>
                    <div>
                        <h3>Company</h3>
                        <p>About Us</p>
                        <p>Contact Us</p>
                        <p>Developers</p>
                    </div>
                    <div>
                        <h3>Learn</h3>
                        <p>Press</p>
                        <p>Blog</p>
                        <p>FAQ</p>
                    </div>
                    <div>
                        <h3>Legal</h3>
                        <p>Privacy Policy</p>
                        <p>Terms of Use</p>
                    </div>
                    <div>
                        <h3>Office</h3>
                        <p style={{textWrap:"wrap"}}>House 17, Road 131 1st Avenue, Gwarinpa Estate 900108, Abuja
                        </p>
                    </div>
                </div>
                <div className="small-device">
                   <div style={{textWrap: "nowrap"}}>
                        <h3>Products</h3>
                        <p>Buy Electricity</p>
                        <p>Buypower for Business</p>
                        <p>Payable</p>
                        <p>Buypower Surge</p>
                    </div>
                    <div>
                        <h3>Company</h3>
                        <p>About Us</p>
                        <p>Contact Us</p>
                        <p>Developers</p>
                    </div> 
                </div>
               
            </main>
        )
    }
}

export default Footer;