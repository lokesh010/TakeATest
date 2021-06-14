import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const tableColumns = ['S.N', 'Test Name', 'Student Name', 'Take Count', 'Obtained Marks', 'Pass Marks', 'Total Marks', 'Actions'];

export default React.memo(({ testResults, setFilter }) =>

    <div className="row">
        <div className="col-md-12 col-lg-12 col-sm-12">
            <div className="white-box">
                <div className="d-md-flex mb-4">
                    <h3 className="box-title mb-0">TestResults</h3>
                    <select className="form-control w-25 ml-auto"
                        defaultValue=''
                        onChange={setFilter}
                    >
                        <option value="">All Results</option>
                        <option value="passed">Passed Results</option>
                        <option value="failed">Failed Results</option>
                    </select>
                </div>
                {/* table */}
                <div className="table-responsive">
                    <table className="table no-wrap">
                        {/* table headers */}
                        <thead>
                            <tr>
                                {tableColumns.map((column, i) => <th className="border-top-0" key={i}>{column}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {testResults.length ?
                                testResults.map((test, i) =>
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td className="txt-oflo">{test.Test.name}</td>
                                        <td>{test.User.fullName}</td>
                                        <td>{test.take_count}</td>
                                        <td className={`
                                            font-weight-bold 
                                            ${test.obtainedMarks < test.Test.passMarks ? 'text-danger' : 'text-success'}
                                            `}>
                                            {test.obtainedMarks}
                                        </td>
                                        <td className="text-info">{test.Test.passMarks}</td>
                                        <td><span className="text-success">{test.Test.totalMarks}</span></td>
                                        <td>
                                            <Link to={`/admin/user/${test.UserId}/test/${test.TestId}/take/${test.take_count}`}>
                                                <Button variant="primary">
                                                    <i className="fas fa-eye"></i>
                                                </Button>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                                : <tr className="mt-4"><td>No data available</td></tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
)



