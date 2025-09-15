import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";   // 👈 import Link
import logo from "../../assets/images/buypower-logo.png"
import "./navbar.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobileMenuOpen: false,
    };
  }

  toggleMobileMenu = () => {
    this.setState((prevState) => ({
      isMobileMenuOpen: !prevState.isMobileMenuOpen,
    }));
  };

  render() {
    const { isMobileMenuOpen } = this.state;
    return (
      <header className="header">
        <div className="container">
          <div className="nav-brand">
            <img src={logo} alt="Company Logo" style={{ height: '40px' }} />
          </div>

          <nav className={`nav ${isMobileMenuOpen ? "nav-open" : ""}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/merchant" className="nav-link">
                  Merchant
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/developer" className="nav-link">
                  Developers
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/careers" className="nav-link">
                  Careers
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/careers" className="nav-link">
                  FAQ
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/careers" className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          <button
            className="mobile-menu-toggle"
            onClick={this.toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>
    );
  }
}

export default Navbar;
