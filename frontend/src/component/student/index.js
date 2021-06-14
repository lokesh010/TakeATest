import React, { useState, useEffect } from "react";
// component
import Results from './tables/myResultList'
// layout
import StudentDashboardLayout from '../../layouts/student-dashboard.layout'
import { getMyResult } from "../../action/resultsAction";

const StudentHome = () => {

  const [results, setResults] = useState([]);

  useEffect(async () => {
    const getResults = await getMyResult();
    setResults(getResults);
  }, [])


  return (
    <StudentDashboardLayout title={"Dashboard"}>

      {/* Container fluid  */}
      <div className="container-fluid">
        {/*  Three charts */}
        <div className="row justify-content-center">
          {/* 1st card */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="white-box analytics-info">
              <h3 className="box-title">Tests Taken</h3>
              <ul className="list-inline two-part d-flex align-items-center mb-0">
                <li>
                  <div id="sparklinedash"><canvas width="67" height="30"
                    style={{ "display": "inline-block", "width": "67px", "height": "30px", "verticalAlign": "top" }}></canvas>
                  </div>
                </li>
                <li className="ms-auto"><span className="counter text-success">659</span></li>
              </ul>
            </div>
          </div>
          {/* 2nd card */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="white-box analytics-info">
              <h3 className="box-title">Passed Tests</h3>
              <ul className="list-inline two-part d-flex align-items-center mb-0">
                <li>
                  <div id="sparklinedash2"><canvas width="67" height="30"
                    style={{ "display": "inline-block", "width": "67px", "height": "30px", "verticalAlign": "top" }}></canvas>
                  </div>
                </li>
                <li className="ms-auto"><span className="counter text-purple">869</span></li>
              </ul>
            </div>
          </div>
          {/* 3rd card */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="white-box analytics-info">
              <h3 className="box-title">Failed Tests</h3>
              <ul className="list-inline two-part d-flex align-items-center mb-0">
                <li>
                  <div id="sparklinedash3"><canvas width="67" height="30"
                    style={{ "display": "inline-block", "width": "67px", "height": "30px", "verticalAlign": "top" }}></canvas>
                  </div>
                </li>
                <li className="ms-auto"><span className="counter text-info">911</span>
                </li>
              </ul>
            </div>
          </div>
          {/* 3rd card */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="white-box analytics-info">
              <h3 className="box-title">Test Taken Students</h3>
              <ul className="list-inline two-part d-flex align-items-center mb-0">
                <li>
                  <div id="sparklinedash3"><canvas width="67" height="30"
                    style={{ "display": "inline-block", "width": "67px", "height": "30px", "verticalAlign": "top" }}></canvas>
                  </div>
                </li>
                <li className="ms-auto"><span className="counter text-info">911</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- All Tests --> */}
        <Results resultList={results} />
      </div>
    </StudentDashboardLayout>
  );
};

export default StudentHome;
