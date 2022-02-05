import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  let navigate = useNavigate();

  function goToLoginPage() {
    navigate("/login");
  }

  function gotTOHomePage() {
    navigate("/");
  }

  return (
    <div className="nav-bar-main-section">
      <div className="main_container">
        <div className="container">
          <div className="nav-section">
            <div className="company-details">
              <h3>Logo</h3>
              <h3 onClick={gotTOHomePage}>Home</h3>
            </div>
            <div className="user-login">
              <button onClick={goToLoginPage}>Login/Registration</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
