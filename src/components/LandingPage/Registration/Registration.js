import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Input from "../InputField/InputField";

function Registration(props) {
  let navigate = useNavigate();

  const initialValues = {
    username: "",
    email: "",
    password: "",
    cofirmPassword: "",
  };
  const validationSchema = Yup.object({
    username: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
    cofirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords Must Match!!"
    ),
  });
  const onSubmit = (values) => {
    console.log("User Created!! ", values);
    navigate("/");
  };

  return (
    <div className="user signupBx">
      <div className="formBx">
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
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="input-class"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input-class"
                  />
                </div>
                <div>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input-class"
                  />
                </div>
                <div>
                  <Input
                    type="password"
                    name="cofirmPassword"
                    placeholder="Confirm Password"
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
      </div>
      <div className="imgBx">
        <img src={require("../../../images/image2.jpg")} alt="" />
      </div>
    </div>
  );
}

export default Registration;
