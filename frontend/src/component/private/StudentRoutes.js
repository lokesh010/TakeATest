import { Route, Redirect } from "react-router-dom";
import { isAuth } from "../../action/authAction";

export default function StudentRoutes ({ children, ...rest }) {
    return (
      <Route {...rest} render={() => {
        return isAuth() && isAuth().role === 'student'
          ? children
          : <Redirect to='/student/signin' />
      }} />
    )
  }