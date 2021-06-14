import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// action
import { isAuth } from "./action/authAction";
// component
const TestResults = React.lazy(() => import("./containers/admin/testResults"));
const Question = React.lazy(() => import("./containers/admin/createQuestion"));
const HomeAdmin = React.lazy(() => import("./containers/admin"));
const Test = React.lazy(() => import("./containers/admin/testList"));
const ViewQuestion = React.lazy(() => import("./containers/admin/viewQuestion"));
const HomeStudent = React.lazy(() => import("./containers/student"));
const TestList = React.lazy(() => import("./containers/student/testList"));
const CheckTestAnswers = React.lazy(() => import("./containers/checkTestAnswers"));
const TakeTest = React.lazy(() => import("./containers/student/takeTest"));
const MyResults = React.lazy(() => import("./containers/student/myResults"));
const Protected = React.lazy(() => import("./component/private/Protected"));
const Profile = React.lazy(() => import("./component/profile"));
const AdminRoutes = React.lazy(() => import("./component/private/AdminRoutes"));
const StudentRoutes = React.lazy(() => import("./component/private/StudentRoutes"));
const AuthRoutes = React.lazy(() => import("./component/private/AuthRoutes"));
// pages
const SignUP = React.lazy(() => import("./pages/SignUp"));
const StudentSignin = React.lazy(() => import("./pages/StudentSignIn"));
const AdminSignin = React.lazy(() => import("./pages/AdminSignIn"));
const Home = React.lazy(() => import("./pages/home"));
const Page404 = React.lazy(() => import("./pages/Page404"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
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
            <AdminRoutes path="/admin/test/:id/questions">
              <ViewQuestion />
            </AdminRoutes>
            <AdminRoutes path="/admin/user/:UserId/test/:TestId/take/:take_count" exact>
              <CheckTestAnswers role={isAuth() && isAuth().role} />
            </AdminRoutes>
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
              <CheckTestAnswers role={isAuth() && isAuth().role} />
            </StudentRoutes>
            {/* 404 */}
            <Route path="/*" component={Page404} exact />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
