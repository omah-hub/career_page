import React from "react";
import "./Job-card.css";

const JobCard = ({ title, description, tags }) => {
  return (
    <div className="job-card">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tags">
            {Array.isArray(tags) &&
            tags.map((tag, i) => <span key={i}>{tag}</span>)}
        </div>
        <button>View More</button>

    </div>
  );
};

export default JobCard;
