import { studentSignin, adminSignin, autheticate, isAuth } from "../action/authAction";
import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

const SigninComponent = ({ history, role }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    message: "",
    showForm: true,
  });

  const { email, password, error, loading, message, showForm } = values;

  useEffect(() => {
    isAuth() && history.push("/");
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setValues({ ...values, loading: true, error: false });
    const user = { email, password };

    (role === 'admin'
      ? adminSignin(user)
      : studentSignin(user))
      .then((data) => {
        try {
          if (data.error) {
            setValues({ ...values, error: data.error, loading: false });
          } else {
            //save user token to cookie
            //save user info to localStorage
            //authenticate user
            autheticate(data, () => {
              if (isAuth() && isAuth().role === 'admin') {
                history.push("/admin/dashboard");
              } else {
                history.push("/student/dashboard");
              }
            });
          }
        } catch (err) {
          console.log(err);
        }
      });
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const showLoading = () =>
    loading ? <div className="alert alert-info">Loading...</div> : "";
  const showError = () =>
    error ? <div className="alert alert-danger">{error}</div> : "";
  const showMessage = () =>
    message ? <div className="alert alert-info">{message}</div> : "";

  const signinForm = () => {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              value={email}
              onChange={handleChange("email")}
              type="email"
              className="form-control"
              placeholder="Type your email"
            />
            <br />

            <input
              value={password}
              onChange={handleChange("password")}
              type="password"
              className="form-control"
              placeholder="Type your password"
            />
          </div>
          <button className="btn btn-primary">SignIn</button>
        </form>
      </>
    );
  };

  return (
    <div className="container">
      {showLoading()}
      {showError()}
      {showMessage()}
      {showForm && signinForm()}
    </div>
  );
};

export default withRouter(SigninComponent);
