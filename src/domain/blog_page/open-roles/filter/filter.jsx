import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoClose } from "react-icons/io5"; 
import "./FilterBar.css";

const FilterBar = () => {
  const [activeFilter, setActiveFilter] = useState(null);

  const filters = {
    "All Department": ["Finance", "Customer Support", "Engineering"],
    "All location": ["Abuja", "Ilorin", "Remote"],
    "Job title": ["Finance", "Customer Support", "Engineering"],
  };

  const toggleFilter = (filter) => {
    setActiveFilter(activeFilter === filter ? null : filter);
  };

  return (
    <div className="filter-container">
        <p>Filter by</p>
        <div className="filter-bar">
      {Object.keys(filters).map((filter) => (
        <div key={filter} className="filter-item">
          <button
            className="filter-button"
            onClick={() => toggleFilter(filter)}
          >
            <span>{filter}</span>
            < MdOutlineKeyboardArrowDown size={20} className="dropdown-icon"/>
          </button>

          {activeFilter === filter && (
            <div className="dropdown">
              <div className="dropdown-header">
                <span>Search</span>
                <button
                  className="close-btn"
                  onClick={() => setActiveFilter(null)}
                >
                  <IoClose size={22} />
                </button>
              </div>
              <ul>
                {filters[filter].map((option) => (
                  <li key={option}>{option}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default FilterBar;
