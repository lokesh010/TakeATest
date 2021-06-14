import React from 'react'

export default React.memo(({cardValues}) =>
    <div className="row justify-content-center">
        {/* 1st card */}
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="white-box analytics-info">
                <h3 className="box-title">Tests Taken</h3>
                <ul className="list-inline two-part d-flex align-items-center mb-0">
                    <li>
                        <div id="sparklinedash"><canvas width="67" height="30"
                            style={{ "display": "inline-block", "width": "67px", "height": "30px", "verticalAlign": "top" }}></canvas>
                        </div>
                    </li>
                    <li className="ms-auto"><span className="counter text-success">{cardValues.totalTestsTaken}</span></li>
                </ul>
            </div>
        </div>
        {/* 2nd card */}
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="white-box analytics-info">
                <h3 className="box-title">Passed Tests</h3>
                <ul className="list-inline two-part d-flex align-items-center mb-0">
                    <li>
                        <div id="sparklinedash2"><canvas width="67" height="30"
                            style={{ "display": "inline-block", "width": "67px", "height": "30px", "verticalAlign": "top" }}></canvas>
                        </div>
                    </li>
                    <li className="ms-auto"><span className="counter text-purple">{cardValues.totalpassedTests}</span></li>
                </ul>
            </div>
        </div>
        {/* 3rd card */}
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="white-box analytics-info">
                <h3 className="box-title">Failed Tests</h3>
                <ul className="list-inline two-part d-flex align-items-center mb-0">
                    <li>
                        <div id="sparklinedash3"><canvas width="67" height="30"
                            style={{ "display": "inline-block", "width": "67px", "height": "30px", "verticalAlign": "top" }}></canvas>
                        </div>
                    </li>
                    <li className="ms-auto"><span className="counter text-info">{cardValues.totalfailedTests}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
)