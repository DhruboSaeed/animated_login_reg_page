import React from "react";

function Login(props) {
  return (
    <div className="user signinBx">
      <div className="imgBx">
        <img src={require("../../../images/image1.jpg")} alt="" />
      </div>
      <div className="formBx">
        <form>
          <h2 className="header-text">Sign In</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit" className="button">
            Sign In
          </button>
          <p className="signup">
            don't have an account?
            <a href="#" onClick={props.toggleForm}>
              Sign Up
            </a>
          </p>
        </form>
        <div className="social-media">
          <ul>
            <li>
              {" "}
              <img src={require("../../../images/facebook.png")} alt="" />
            </li>
            <li>
              <img src={require("../../../images/twitter.png")} alt="" />
            </li>
            <li>
              <img src={require("../../../images/linkedin.png")} alt="" />
            </li>
            <li>
              <img src={require("../../../images/instagram.png")} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Login;
