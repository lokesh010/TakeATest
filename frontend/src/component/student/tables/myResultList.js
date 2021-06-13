import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const tableColumns = ['S.N', 'Test Name', 'Test Taken Count', 'Status', 'Obtained Marks', 'Pass Marks', 'Total Marks', 'Actions'];

export default React.memo(({ resultList }) => 

        <div className="row">
            <div className="col-md-12 col-lg-12 col-sm-12">
                <div className="white-box">
                    <div className="d-md-flex mb-3">
                        <h3 className="box-title mb-0">All Tests</h3>
                    </div>
                    {/* test list table */}
                    <div className="table-responsive">
                        <table className="table no-wrap">
                            {/* table head */}
                            <thead>
                                <tr>
                                    {tableColumns.map((column, i) => <th className="border-top-0" key={i}>{column}</th>)}
                                </tr>
                            </thead>
                            <tbody>
                                {resultList.length ?
                                    resultList.map((test, i) =>
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td className="txt-oflo">{test.Test.name}</td>
                                            <td>{test.take_count}</td>
                                            <td
                                            className={test.obtainedMarks < test.Test.passMarks? 'text-danger': 'text-success'}
                                            >{test.obtainedMarks < test.Test.passMarks? 'Failed': 'Passed'}</td>
                                            <td className={`
                                            font-weight-bold 
                                            ${test.obtainedMarks < test.Test.passMarks? 'text-danger': 'text-success'}
                                            `}>
                                                {test.obtainedMarks}
                                            </td>
                                            <td><span>{test.Test.passMarks}</span></td>
                                            <td><span>{test.Test.totalMarks}</span></td>
                                            <td>
                                            <Link to={`/test/${test.TestId}/take/${test.take_count}`}>
                                                <Button variant="primary">
                                                    Check Answers
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