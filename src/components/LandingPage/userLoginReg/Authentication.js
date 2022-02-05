import React from "react";
import "./Auth.css";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";

function Authentication() {
  function toggleForm() {
    const main_container = document.querySelector(".card-section");
    const container = document.querySelector(".block-section");
    container.classList.toggle("active");
    main_container.classList.toggle("active");
  }
  return (
    <div className="card-section">
      <div className="block-section">
        <Login toggleForm={toggleForm} />
        <Registration toggleForm={toggleForm} />
      </div>
    </div>
  );
}

export default Authentication;
