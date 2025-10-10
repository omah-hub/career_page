import React, { Component } from "react";
import sideimage from "../../../assets/images/talent_pool.png";
import { Form } from "./form";
import { MdCloudUpload } from "react-icons/md";

import "./talent_pool.css";

class TalentForm extends Component {
  onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

  render() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = this.props.methods;

    return (
      <div className="talent-container">
        
      <div className="talent-content">
         <div className="form-container"> 
            <div className="form-section">
            <h2>Join Our Talent Pool</h2>
            <p>We're always looking for exceptional talent</p>

            <form onSubmit={handleSubmit(this.onSubmit)}>
                <div className="form-group">
                <label>Full Name</label>
                <input
                    type="text"
                    placeholder="Enter Full Name"
                    {...register("fullName", { required: "Full name is required" })}
                />
                {errors.fullName && (
                    <span className="error">{errors.fullName.message}</span>
                )}
                </div>

                <div className="form-group">
                <label>Email Address</label>
                <input
                    type="email"
                    placeholder="Enter Email"
                    {...register("email", {
                    required: "Email is required",
                    pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Enter a valid email",
                    },
                    })}
                />
                {errors.email && (
                    <span className="error">{errors.email.message}</span>
                )}
                </div>

                <div className="form-group">
                <label>Phone Number</label>
                <input
                    type="text"
                    placeholder="Enter Phone Number"
                    {...register("phone", { required: "Phone number is required" })}
                />
                {errors.phone && (
                    <span className="error">{errors.phone.message}</span>
                )}
                </div>

                <div className="form-group">
                <label>Preferred Role</label>
                <input
                    type="text"
                    placeholder="Enter Preferred Role"
                    {...register("role", { required: "Preferred role is required" })}
                />
                {errors.role && (
                    <span className="error">{errors.role.message}</span>
                )}
                </div>

                <div className="form-group">
                <label>LinkedIn Profile (Optional)</label>
                <input
                    type="text"
                    placeholder="Enter LinkedIn profile URL"
                    {...register("linkedin")}
                />
                </div>

                <div className="form-group">
                <label>Cover Letter</label>
                <textarea
                    placeholder="Write your cover letter"
                    {...register("coverLetter", {
                    required: "Cover letter is required",
                    })}
                ></textarea>
                {errors.coverLetter && (
                    <span className="error">{errors.coverLetter.message}</span>
                )}
                </div>

                <div className="form-group-upload">
                    <MdCloudUpload className="icon"/>

                    <div>
                        <label>Upload Resume</label>
                        <p>Drag and drop or browse to upload your resume</p>
                        <div>Browse</div>
                    </div>
                
                </div>
                
               <div className="btn-container">
                 <button type="submit" className="submit-btn">
                Join Pool
                </button>
               </div>
           
            

           
            </form>
            </div>
        </div>

      
        <div className="image-section">
           
          <img src={sideimage} alt="Talent" />
        </div>
      </div>
    </div>
    );
  }
}

export default Form(TalentForm);
