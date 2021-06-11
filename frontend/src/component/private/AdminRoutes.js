import { Route, Redirect } from "react-router-dom";
import { isAuth } from "../../action/authAction";

export default function AdminRoutes ({ children, ...rest }) {
    return (
      <Route {...rest} render={() => {
        return isAuth() && isAuth().role === 'admin'
          ? children
          : <Redirect to='/student/signin' />
      }} />
    )
  }