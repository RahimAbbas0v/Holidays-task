import { Formik, Form, Field } from "formik";
import React from "react";
import { Button } from "reactstrap";
import { Link, Outlet } from "react-router-dom";
import * as Yup from "yup";
import "./Home.css";
const SignupSchema = Yup.object().shape({
  number: Yup.string()
    .min(8, "Email or phone number must be more than 8 character")
    .required("Please enter email or phone number")
    .matches(
      /^(?:\d{10}|\w+@\w+\.\w{2,3})$/,
      "Email or phone number is not correct"
    ),
  password: Yup.string()
    .min(8, "Password must be more than 8 character")
    .required("Please enter password")
    .matches(/^[\.A-Za-z0-9]+$/, "Password is not correct"),
});
function Home() {
  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="photo">
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
                  alt=""
                />
              </div>
              <div className="text">
                <h2>
                  Connect with friends and the world around you on Facebook.
                </h2>
              </div>
            </div>
            <div className="col-6">
              <Formik
                initialValues={{
                  number: "",
                  password: "",
                }}
                validationSchema={SignupSchema}
                onSubmit={(values, errors) => {
                  console.log(values);
                }}
              >
                {({ errors, touched }) => {
                  return (
                    <Form id="form">
                      <Field
                        id="field1"
                        name="number"
                        placeholder="Email or phone number"
                      />{" "}
                      <br />
                      {errors.number && touched.number ? (
                        <div style={{ color: "red", fontSize: 12 }}>
                          {errors.number}
                        </div>
                      ) : null}
                      <Field
                        id="field2"
                        name="password"
                        type="password"
                        placeholder="Password"
                      />
                      {errors.password && touched.password ? (
                        <div style={{ color: "red", fontSize: 12 }}>
                          {errors.password}
                        </div>
                      ) : null}
                      <button onSubmit={errors.onSubmit} id="button">
                        Log In
                      </button>
                      <p>Forgot Password?</p>
                      <hr />
                      <button id="crtbutton">
                        <Link
                          to={"Signup"}
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          Create new account
                        </Link>
                      </button>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        <Outlet /></div>
            
      </header>
    </>
  );
}

export default Home;
