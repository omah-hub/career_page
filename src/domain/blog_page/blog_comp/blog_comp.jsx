import React from "react";
import Navbar from "../../../general/navbar/navbar";
import Hero from "../hero/hero";
import JoinUs from "../join_us/join_us";
import './blog_comp.css'

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

            <JoinUs />
            </div>
          
        )
    }
}
export default BlogComp;