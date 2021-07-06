import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AiOutlineUser } from "react-icons/ai";
import { BiPhone } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { RiLockPasswordFill } from "react-icons/ri";
import { ImAddressBook } from "react-icons/im";
import { BiUserPlus } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import swal  from "sweetalert";
import {  useHistory } from "react-router-dom";
import { FaCity } from "react-icons/fa";
import { Error } from "../Login/ErrorMessage";
import "../Login/login.css";
import AOS from "aos";
import axios from "axios";
import "aos/dist/aos.css";

const initialValue = {
  phone: "",
  password: "",
  username: "",
  address: "",
  passwordConfirmation: "",
  city: "",
};

const phoneRegExp =
  /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;

const validationSchema = Yup.object({
  username: Yup.string()
    .required("Username mising")
    .matches(/[abcdefghijklmnopqrstuvwxyz]+/, "Must be a Letter"),
  address: Yup.string().required("address mising"),

  phone: Yup.string()
    .required("Phone Number missing")
    .matches(phoneRegExp, "Phone number is not valid"),
  password: Yup.string()
    .required("Password missing")
    .min(8, "Password is too short"),

  passwordConfirmation: Yup.string()
    .required("Confirm Password missing")
    .oneOf([Yup.ref("password"), null], "Passwords is not matching"),
  city: Yup.string().required("City missing"),
});
export function Signup() {
  const [Cityerr, SetCityerr] =React.useState();
  const [City, SetCity] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/city/getcity")
      .then((res) => {
        SetCity(res.data.Cities);
      })
      .catch((e) => {
        SetCityerr(e);
      });


  
  }, []);
  const onSubmit = async (values) => {
        const res = await fetch("http://localhost:5000/api/v1/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: values.username,
        phone: `${values.phone}`,
        password: `${values.password}`,
        city: `${values.city}`,
        address: `${values.address}`,
      }),
    });
    console.log(res);
  
    const data = await res.json();
    console.log(data.message);
  
    if (data.status === 500 || !data || data.success === false) {
      swal("Error!", data.message, "error");
      console.log(data);
    } else {
      console.log(data);
      swal("Success!", data.message, "success");
      history.push("/login")
    }
  };
  let history = useHistory();
  const goPrevious = () => {
    history.goBack();
  };
  React.useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
  return (
    <>
      <div className="background">
        <div className="form-signup" data-aos="zoom-in">
          <AiOutlineClose
            onClick={goPrevious}
            className="login-cross"
            size="30"
          />
          <div>
            <h1>Sign Up</h1>
          </div>

          <Formik
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            initialValues={initialValue}
          >
            <Form>
              <div className="phone">
                <div className="phone-inner">
                  <AiOutlineUser className="login-logo" size="35" />
                  <Field
                    type="text"
                    placeholder="User Name"
                    id="username"
                    name="username"
                  />
                </div>
                <ErrorMessage component={Error} name="username" />
              </div>

              <div className="phone">
                <div className="phone-inner">
                  <BiPhone className="login-logo" size="35" />
                  <Field type="text" id="phone" name="phone" />
                </div>
                <ErrorMessage component={Error} name="phone" />
              </div>

              <div className="phone">
                <div className="phone-inner">
                  <FaCity className="login-logo" size="30" />
                  <Field className="select" as="select" id="city" name="city">
                    {City.map((opt) => {
                      return (
                        <option key={opt._id} value={opt._id}>
                          {opt.cities}
                        </option>
                      );
                    })}
                  </Field>
                </div>
                <ErrorMessage component={Error} name="city" />
              </div>
              <div className="phone">
                <div className="phone-inner">
                  <ImAddressBook className="login-logo" size="35" />
                  <Field type="text" id="address" name="address" />
                </div>
                <ErrorMessage component={Error} name="address" />
              </div>
              <div className="password">
                <div className="phone-inner">
                  <RiLockPasswordLine size="35" className="login-logo" />
                  <Field type="password" id="password" name="password" />
                </div>
                <ErrorMessage component={Error} name="password" />
              </div>
              <div className="password">
                <div className="phone-inner">
                  <RiLockPasswordFill size="35" className="login-logo" />
                  <Field
                    type="password"
                    id="passwordConfirmation"
                    name="passwordConfirmation"
                    
                  />
                </div>
                <ErrorMessage component={Error} name="passwordConfirmation" />
              </div>

              <div className="login-button">
                <BiUserPlus size="35" className="login-logo" />
                <button type='submit'>
                  Sign Up
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}
