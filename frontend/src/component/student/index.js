import React from "react";
// layout
import StudentDashboardLayout from '../../layouts/student-dashboard.layout'

const index = () => {
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
       {/* <!-- RECENT SALES --> */}
        <div className="row">
          <div className="col-md-12 col-lg-12 col-sm-12">
            <div className="white-box">
              <div className="d-md-flex mb-3">
                <h3 className="box-title mb-0">Test Taken</h3>
                <div className="col-md-3 col-sm-4 col-xs-6 ms-auto">
                  <select className="form-select shadow-none row border-top">
                    <option>March 2021</option>
                    <option>April 2021</option>
                    <option>May 2021</option>
                    <option>June 2021</option>
                    <option>July 2021</option>
                  </select>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table no-wrap">
                  <thead>
                    <tr>
                      <th className="border-top-0">#</th>
                      <th className="border-top-0">Name</th>
                      <th className="border-top-0">Status</th>
                      <th className="border-top-0">Date</th>
                      <th className="border-top-0">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td className="txt-oflo">Elite admin</td>
                      <td>SALE</td>
                      <td className="txt-oflo">April 18, 2021</td>
                      <td><span className="text-success">$24</span></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td className="txt-oflo">Real Homes WP Theme</td>
                      <td>EXTENDED</td>
                      <td className="txt-oflo">April 19, 2021</td>
                      <td><span className="text-info">$1250</span></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td className="txt-oflo">Ample Admin</td>
                      <td>EXTENDED</td>
                      <td className="txt-oflo">April 19, 2021</td>
                      <td><span className="text-info">$1250</span></td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td className="txt-oflo">Medical Pro WP Theme</td>
                      <td>TAX</td>
                      <td className="txt-oflo">April 20, 2021</td>
                      <td><span className="text-danger">-$24</span></td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td className="txt-oflo">Hosting press html</td>
                      <td>SALE</td>
                      <td className="txt-oflo">April 21, 2021</td>
                      <td><span className="text-success">$24</span></td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td className="txt-oflo">Digital Agency PSD</td>
                      <td>SALE</td>
                      <td className="txt-oflo">April 23, 2021</td>
                      <td><span className="text-danger">-$14</span></td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td className="txt-oflo">Helping Hands WP Theme</td>
                      <td>MEMBER</td>
                      <td className="txt-oflo">April 22, 2021</td>
                      <td><span className="text-success">$64</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
       </div>
    </StudentDashboardLayout>
  );
};

export default index;
