import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
import Swal from "sweetalert2";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .min(3, "Password must be 3 characters at minimum")
    .required("Password is required"),
});

const Login = () => {

  const loginSubmit = async (formdata) => {
    const response = await fetch('http://localhost:5000/user/authenticate', {
      method: 'POST',
      body : JSON.stringify(formdata),
      headers: {
        'Content-Type' : 'application/json'
      }
    })

    if(response.status === 200){
      Swal.fire({
        icon : 'success',
        title : 'Logged in',
        text : 'Login Success'
      })
    }else if(response.status === 401){
      Swal.fire({
        icon : 'error',
        title : 'Failed',
        text : 'Login Failed'
      })
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="row mb-5">
            <div className="col-lg-12 text-center">
              <h1 className="mt-5">Login Form</h1>
            </div>
          </div>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={loginSubmit}
          >
            {({ touched, errors, isSubmitting, values }) => (
              <Form>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    autoComplete="off"
                    className={`mt-2 form-control
                        ${touched.email && errors.email ? "is-invalid" : ""}`}
                  />

                  <ErrorMessage
                    component="div"
                    name="email"
                    className="invalid-feedback"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password" className="mt-3">
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    className={`mt-2 form-control
                        ${
                          touched.password && errors.password
                            ? "is-invalid"
                            : ""
                        }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="password"
                    className="invalid-feedback"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
