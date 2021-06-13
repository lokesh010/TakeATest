import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminRoutes from './component/private/AdminRoutes'
import StudentRoutes from './component/private/StudentRoutes'
import AuthRoutes from './component/private/AuthRoutes'
// component
import Protected from "./component/private/Protected";
import Profile from "./component/profile";
import TestResults from "./containers/admin/testResults";
import Question from "./containers/admin/question";
import HomeAdmin from "./containers/admin";
import Test from "./containers/admin/testList";
import HomeStudent from "./component/student";
import TestList from "./component/student/testList";
import TakeTest from "./component/student/takeTest";
import MyResults from "./component/student/myResults";
import CheckTestAnswers from "./component/student/tables/checkTestAnswers";
// pages
import SignUP from "./pages/SignUp";
import StudentSignin from "./pages/StudentSignIn";
import AdminSignin from "./pages/AdminSignIn";
import Home from "./pages/home";
import Page404 from "./pages/Page404";
// action
import { isAuth } from "./action/authAction";

function App() {
  return (
    <div className="App">
      <Router>
        <Protected />
        <Switch>
          {/* pages */}
          <Route path="/" component={Home} exact />
          <Route path="/home" component={Home} exact />
          <Route path="/signup" component={SignUP} exact />
          {/* logins */}
          <Route path="/student/signin" component={StudentSignin} exact />
          <Route path="/admin/signin" component={AdminSignin} exact />
          {/* Auth Routes */}
          <AuthRoutes path="/myprofile" exact>
            <Profile />
          </AuthRoutes>
          {/* admin protected routes */}
          <AdminRoutes path="/admin/dashboard" exact>
            <HomeAdmin />
          </AdminRoutes>
          <AdminRoutes path="/admin/test" exact>
            <Test />
          </AdminRoutes>
          <AdminRoutes path="/admin/question">
            <Question />
          </AdminRoutes>
          <AdminRoutes path="/admin/test/results">
            <TestResults />
          </AdminRoutes>
          <AuthRoutes path="/admin/user/:UserId/test/:TestId/take/:take_count" exact>
            <CheckTestAnswers role={isAuth() && isAuth().role} />
          </AuthRoutes>
          {/* student protected routes */}
          <StudentRoutes path="/student/dashboard" exact>
            <HomeStudent />
          </StudentRoutes>
          <StudentRoutes path="/student/test" exact>
            <TestList />
          </StudentRoutes>
          <StudentRoutes path="/student/test/:id/take" exact>
            <TakeTest />
          </StudentRoutes>
          <StudentRoutes path="/student/results">
            <MyResults />
          </StudentRoutes>
          <StudentRoutes path="/student/test/:TestId/take/:take_count" exact>
            <CheckTestAnswers role={isAuth() && isAuth().role}/>
          </StudentRoutes>
          {/* 404 */}
          <Route path="/*" component={Page404} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
