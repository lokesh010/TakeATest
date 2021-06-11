import React from "react";
// component
import SignupComponent from "../component/SignUpComponet";
import PageLayout from '../layouts/page.layout'

const SignUp = () => {
  return (
    <PageLayout>
      <h2 className="text-center pt-4 pb-4">SignUp</h2>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <SignupComponent />
        </div>
      </div>
    </PageLayout>
  );
};

export default SignUp;
