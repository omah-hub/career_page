import React from "react";

import './card_component.css';

const CultureCard = ({ icon, title, description }) => (
  <div className="our-culture-content">
    <div className="our-culture-item">
        <div>
          <img src={icon} alt="" />
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
  </div>
);

export default CultureCard;