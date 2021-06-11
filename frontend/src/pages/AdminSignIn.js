import React from "react";
import SigninComponent from "../component/SigninComponent";
// layout
import PageLayout from '../layouts/page.layout'

const Signin = () => {
  return (
    <PageLayout>
      <h2 className="text-center pt-4 pb-4">Admin SignIn</h2>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <SigninComponent role={'admin'} />
        </div>
      </div>
    </PageLayout>
  );
};

export default Signin;
