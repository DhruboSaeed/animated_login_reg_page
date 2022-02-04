import React from "react";
import Login from "../Login/Login";
import Registration from "../Registration/Registration"
import "../OpenningPage/style.css";

function OpeningPage() {
  function toggleForm() {
    const main_container = document.querySelector(".main-container");
    const container = document.querySelector(".container");
    container.classList.toggle("active");
    main_container.classList.toggle("active");
  }
  return (
    <div className="main-container">
      <div className="container">
        <Login toggleForm={toggleForm} />
        <Registration toggleForm={toggleForm} />
      </div>
    </div>
  );
}

export default OpeningPage;
