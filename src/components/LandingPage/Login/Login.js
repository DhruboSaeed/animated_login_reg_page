import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Input from "../InputField/InputField";

function Login(props) {
  let navigate = useNavigate();
  const user = {
    email: "admin@gmail.com",
    password: "admin",
  };

  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });
  const onSubmit = (values) => {
    if (JSON.stringify(user) === JSON.stringify(values)) {
      // navigate("/home");
      console.log("Done! Login Successfully!");
    } else {
      console.log("Not Done");
      window.alert("Password or Email not Matched!!");
    }
  };

  return (
    <div className="user signinBx">
      <div className="imgBx">
        <img src={require("../../../images/image1.jpg")} alt="" />
      </div>
      <div className="formBx">
        <h2 className="header-text">Sign In</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form className="form-width">
              <div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter Email or Phone"
                    className="input-class"
                  />
                </div>
                <div>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    className="input-class"
                  />
                </div>
                <button type="submit" className="button">
                  Sign In
                </button>
                <p className="signup">
                  don't have an account?
                  <a href="#" onClick={props.toggleForm}>
                    Sign Up
                  </a>
                </p>
              </div>
            </Form>
          )}
        </Formik>

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
