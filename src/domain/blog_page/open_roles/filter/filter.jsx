import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";
import { FaRegCircle, FaCircle  } from "react-icons/fa";
import horizontalLine from "../../../../assets/images/horizontal-line.png";
import "./FilterBar.css";

const FilterBar = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({});


  const filters = {
    "All Department": ["Finance", "Customer Support", "Engineering", "Support"],
    "All location": ["Abuja", "Ilorin", "Remote"],
    "Job title": ["Finance", "Customer Support", "Engineering"],
  };

  const toggleFilter = (filter) => {
    setActiveFilter(activeFilter === filter ? null : filter);
  };

  const handleOptionSelect = (filter, option) => {
  setSelectedOptions((prev) => ({
    ...prev,
    [filter]: option,
  }));
};

  return (
    <>
      {/* --- Desktop/Large Screen Filter Bar --- */}
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
                <MdOutlineKeyboardArrowDown size={20} className="dropdown-icon" />
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

      <div className="mobile-filter-wrapper">
        {/* --- Mobile (≤ 950px) Compact Filter Bar --- */}
        <div className="mobile-filter-bar" onClick={() => setMobileOpen(true)}>
          <span>Filter by</span>
          <FiFilter className="filter-icon" />
        </div>

       {/* --- Mobile Overlay / Bottom Sheet --- */}
        {mobileOpen && (
          <div
            className={`mobile-filter-panel ${
              activeFilter ? "expanded" : ""
            }`}
          >

            <div style={{display:"flex", justifyContent:"space-between"}}>
              <h4>Filters</h4>
              <button className="close-btn" onClick={() => setMobileOpen(false)}>
                <IoClose size={14} />
              </button>
              
            </div>
            <img src={horizontalLine} alt=""/>

            <div className="mobile-dropdowns">
              {Object.keys(filters).map((filter) => (
                <div key={filter}>
                  <div
                    className="filter-button"
                    onClick={() => toggleFilter(filter)}
                  >
                    {activeFilter === filter ? (
                    <MdOutlineKeyboardArrowDown size={20} className="icon" />
                  ) : (
                    <MdOutlineKeyboardArrowRight size={20} className="icon" />
                  )}

                    <span>{filter}</span>
                    
                  </div>

                  {activeFilter === filter && (
                    <div className="dropdown">
                    <div>
                      {filters[filter].map((option) => (
                        <div
                          key={option}
                          className={`sub-option ${selectedOptions[filter] === option ? "selected" : ""}`}
                          onClick={() => handleOptionSelect(filter, option)}
                        >
                          {selectedOptions[filter] === option ? (
                            <FaCircle size={12} color="#6BA23B" />
                          ) : (
                            <FaRegCircle size={12} color="#B2B2B2" />
                          )}
                          <div className="option">{option}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FilterBar;
