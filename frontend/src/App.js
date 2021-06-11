import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminRoutes from './component/private/AdminRoutes'
// component
import HomeAdmin from "./component/admin";
import HomeStudent from "./component/student";
import Protected from "./component/private/Protected";
import Test from "./component/admin/test";
// pages
import SignUP from "./pages/SignUp";
import StudentSignin from "./pages/StudentSignIn";
import AdminSignin from "./pages/AdminSignIn";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Protected /> */}
        <Switch>
          {/* pages */}
          <Route path="/" component={Home} exact />
          <Route path="/home" component={Home} exact />
          <Route path="/signup" component={SignUP} exact />
          {/* logins */}
          <Route path="/student/signin" component={StudentSignin} exact />
          <Route path="/admin/signin" component={AdminSignin} exact />
          <Route path="/student/dashboard" component={HomeStudent} exact />
          {/* <Route path="/admin/test" component={Test} exact /> */}
          {/* admin protected routes */}
          <AdminRoutes path="/admin/dashboard">
            <HomeAdmin/>
          </AdminRoutes>
          <AdminRoutes path="/admin/test">
            <Test/>
          </AdminRoutes>
          {/* 404 */}
          {/* <Route path="/*" component={HomeStudent} exact /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
