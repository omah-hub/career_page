import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ useNavigate instead of Navigate
import "./Job-card.css";

const JobCard = ({ title, description, tags }) => {
  const navigate = useNavigate();

  return (
    <div className="job-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tags">
        {Array.isArray(tags) &&
          tags.map((tag, i) => <span key={i}>{tag}</span>)}
      </div>

      <button onClick={() => navigate("/job-details")}>View More</button>
    </div>
  );
};

export default JobCard;
