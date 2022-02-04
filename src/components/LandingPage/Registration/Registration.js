import React from "react";

function Registration(props) {
  return (
    <div className="user signupBx">
      <div className="formBx">
        <form>
          <h2 className="header-text">Create an account</h2>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="submit" className="button color">
            Sign Up
          </button>
          <p className="signup">
            Already have an account?
            <a href="#" onClick={props.toggleForm}>
              Sign In
            </a>
          </p>
        </form>
      </div>
      <div className="imgBx">
        <img src={require("../../../images/image2.jpg")} alt="" />
      </div>
    </div>
  );
}

export default Registration;
