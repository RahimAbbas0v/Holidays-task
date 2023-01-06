import { Formik, Form, Field } from "formik";
import React from "react";
import { Button } from "reactstrap";
import { Link, Outlet } from "react-router-dom";
import * as Yup from "yup";
import "./Signup.css";
import { FaQuestionCircle } from "react-icons/fa";
import { FaBackspace } from "react-icons/fa";
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
  name: Yup.string().required("What is your Name"),
  lastname: Yup.string().required("What is your LastName"),
});

function Signup() {
  return (
    <section>
      <Formik
        initialValues={{
          name: "",
          lastname: "",
          password: "",
          number: "",
          month: 1,
          days: 1,
          years: 1,
          accept: false,
          gender: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, errors) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => {
          return (
            <Form id="form2">
              <div id="sign">
                <div id="exit">
                  <h2>Sign Up</h2>
                  <p id="exiticon">
                    <Link to={"/"}>
                      <FaBackspace />
                    </Link>
                  </p>
                </div>
                <p>It’s quick and easy.</p>
              </div>
              <hr />
              <div className="namess">
                <div>
                  <Field id="fieldname" name="name" placeholder="First Name" />
                  {errors.name && touched.name ? (
                    <div style={{ color: "red", fontSize: 12 }}>
                      {errors.name}
                    </div>
                  ) : null}
                </div>
                <div>
                  <Field id="field" name="lastname" placeholder="Last Name" />
                  {errors.lastname && touched.lastname ? (
                    <div style={{ color: "red", fontSize: 12 }}>
                      {errors.lastname}
                    </div>
                  ) : null}{" "}
                </div>
              </div>
              <br />
              <Field
                id="fieldthird"
                name="number"
                placeholder="Email or Phone number"
              />
              {errors.number && touched.number ? (
                <div style={{ color: "red", fontSize: 12 }}>
                  {errors.number}
                </div>
              ) : null}
              <Field
                id="fieldthird"
                name="password"
                placeholder="New password"
                type="password"
              />
              {errors.password && touched.password ? (
                <div style={{ color: "red", fontSize: 12 }}>
                  {errors.password}
                </div>
              ) : null}
              <p id="paragraf">
                Birthday <FaQuestionCircle />
              </p>
              <Field component="select" id="fieldchoose" name="month">
                <option value={1}>Jan</option>
                <option value={2}>Feb</option>
                <option value={3}>Mar</option>
                <option value={4}>Apr</option>
                <option value={5}>May</option>
                <option value={6}>Jun</option>
                <option value={7}>Jul</option>
                <option value={8}>Aug</option>
                <option value={9}>Sep</option>
                <option value={10}>Oct</option>
                <option value={11}>Nov</option>
                <option value={12}>Dec</option>
              </Field>
              <Field
                component="select"
                id="fieldchoose"
                classname="date"
                name="days"
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
                <option value={11}>11</option>
                <option value={12}>12</option>
                <option value={13}>13</option>
                <option value={14}>14</option>
                <option value={15}>15</option>
                <option value={16}>16</option>
                <option value={17}>17</option>
                <option value={18}>18</option>
                <option value={19}>19</option>
                <option value={20}>20</option>
                <option value={21}>21</option>
                <option value={22}>22</option>
                <option value={23}>23</option>
                <option value={24}>24</option>
                <option value={25}>25</option>
                <option value={26}>26</option>
                <option value={27}>27</option>
                <option value={28}>28</option>
                <option value={29}>29</option>
                <option value={30}>30</option>
                <option value={31}>31</option>
              </Field>
              <Field component="select" id="fieldchoose" name="years">
                <option value={1}>2022</option>
                <option value={2}>2021</option>
                <option value={3}>2020</option>
                <option value={4}>2019</option>
                <option value={5}>2018</option>
                <option value={6}>2017</option>
                <option value={7}>2016</option>
                <option value={8}>2015</option>
                <option value={9}>2014</option>
                <option value={10}>2013</option>
                <option value={11}>2012</option>
                <option value={12}>2011</option>
                <option value={13}>2010</option>
                <option value={14}>2009</option>
                <option value={15}>2008</option>
                <option value={16}>2007</option>
                <option value={17}>2006</option>
                <option value={18}>2005</option>
                <option value={19}>2004</option>
                <option value={20}>2003</option>
                <option value={21}>2002</option>
                <option value={22}>2001</option>
                <option value={23}>2000</option>
              </Field>
              <p id="paragraf" style={{ marginTop: "0.4rem" }}>
                Gender <FaQuestionCircle />
              </p>
              <div id="genders">
                <label for="male">
                  <Field type="radio" value="male" id="male" name="gender" />
                  Male
                </label>
                <label for="female">
                  <Field
                    type="radio"
                    value="female"
                    id="female"
                    name="gender"
                  />
                  Female
                </label>
              </div>
              <p id="conditions">
                People who use our service may have uploaded your contact
                information to Facebook. <span id="learn">Learn more.</span>{" "}
              </p>
              <p id="conditions2">
                By clicking Sign Up, you agree to our Terms,
                <span id="learn"> Privacy Policy</span> and{" "}
                <span id="learn">Cookies Policy</span> . You may receive SMS
                Notifications from us and can opt out any time.
              </p>
              <button type="submit" class="btn btn-success">
                Sign Up
              </button>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
}

export default Signup;
