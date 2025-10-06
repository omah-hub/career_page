import React from "react";
import Navbar from "../../../general/navbar/navbar";
import Hero from "../hero/hero";
import JoinUs from "../join_us/join_us";
import OurValues from "../our_values/our_values";
import OurCulture from "../our_culture/our_culture";
import Humans from "../humans/humans";
import OpenRoles from "../open-roles/open-roles";
import Form from "../talent_pool/talent_pool";
import './blog_comp.css'
import Footer from "../../../general/footer/footer";

class BlogComp extends React.Component {
    render() {
        return(
            <div>
                 <div className="bg-cover">
                <div className="bg-blur"></div>
                <div className="bg-content">
                    <Navbar />
                    <Hero className="hero-height"/>
                </div>
            </div>

           <div className="other-component">
                <JoinUs />
                <OurValues />
                <OurCulture />
                <Humans />
                <OpenRoles />
                <Form />
                <Footer/>
           </div>
            </div>
          
        )
    }
}
export default BlogComp;