import React, { useEffect, useState } from "react";
import { isAuth, signup } from "../action/authAction";
import { withRouter } from "react-router-dom";

const SignUpComponet = ({ history }) => {
  const [values, setValues] = useState({
    fullName: "",
    phone: "",
    address: "",
    email: "",
    password: "",
    cpassword: "",
    error: "",
    loading: false,
    message: "",
    showForm: true,
  });

  const { fullName, phone, address, email, password, cpassword, error, loading, message, showForm } = values;
  useEffect(() => {
    isAuth() && history.push("/");
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== cpassword) {
      return setValues({ ...values, error: "password and confirm password don't match" })
    }

    setValues({ ...values, loading: true, error: false });
    const user = { fullName, email, password, phone, address };

    try {
      signup(user).then((data) => {
        try {
          if (data.error) {
            setValues({ ...values, error: data.error, loading: false });
            console.log("server error");
          } else {
            setValues({
              ...values,
              fullName: "",
              phone: "",
              address: "",
              email: "",
              password: "",
              error: "",
              loading: false,
              message: data.message,
              showForm: false,
            });
          }
        } catch (err) {
          console.log(err);
        }
      });
    } catch (error) {
      console.log("error something");
    }
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

  const signupForm = () => {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              value={fullName}
              onChange={handleChange("fullName")}
              type="text"
              className="form-control"
              placeholder="Enter Full Name"
            />
            <br />

            <input
              value={phone}
              onChange={handleChange("phone")}
              type="number"
              className="form-control"
              placeholder="Enter phone"
            />
            <br />

            <input
              value={address}
              onChange={handleChange("address")}
              type="text"
              className="form-control"
              placeholder="Enter adress"
            />
            <br />

            <input
              value={email}
              onChange={handleChange("email")}
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
            <br />

            <input
              value={password}
              onChange={handleChange("password")}
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
            <br />

            <input
              value={cpassword}
              onChange={handleChange("cpassword")}
              type="password"
              className="form-control"
              placeholder="Confirm password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            SignUp
          </button>
        </form>
      </>
    );
  };

  return (
    <div className="container">
      {showLoading()}
      {showError()}
      {showMessage()}
      {showForm && signupForm()}
    </div>
  );
};

export default withRouter(SignUpComponet);
