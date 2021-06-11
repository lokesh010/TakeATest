import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { isAuth } from "../../action/authAction";
const Protected = ({ history }) => {
  useEffect(() => {
    // if (!isAuth()) {
    //   history.push("/home");
    // } else 
    if (isAuth() && isAuth().role === 'admin') {
      history.push("/admin/dashboard");
    }
    else if (isAuth() && isAuth().role === 'student') {
      history.push("/student/dashboard");
    }
  }, []);
  return <div></div>;
};

export default withRouter(Protected);
