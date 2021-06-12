import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const tableColumns = ['S.N', 'Name', 'Description', 'Pass Marks', 'Total Marks', 'Actions'];

export default React.memo(({ testList }) =>{
    const [selectedTestId, setselectedTestId] = useState(null);

    return (    
    <div className="row">
        <div className="col-md-12 col-lg-12 col-sm-12">
            <div className="white-box">
                <div className="d-md-flex mb-3">
                    <h3 className="box-title mb-0">All Tests</h3>
                </div>
                <div className="table-responsive">
                    <table className="table no-wrap">
                        {/* table head */}
                        <thead>
                            <tr>
                                {tableColumns.map(column => <th className="border-top-0">{column}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {testList.length ?
                                testList.map((test, i) =>
                                    <tr>
                                        <td>{i + 1}</td>
                                        <td className="txt-oflo">{test.name}</td>
                                        <td>{test.description}</td>
                                        <td className="text-info">{test.passMarks}</td>
                                        <td><span className="text-success">{test.totalMarks}</span></td>
                                        <td>
                                            <button className="btn btn-primary text-white"
                                            data-toggle="modal" data-target="#exampleModal"
                                            onClick={()=> setselectedTestId(test.id)}>
                                                Take Test
                                            </button>
                                        </td>
                                    </tr>
                                )
                                : <div className="mt-4"><div>No data available</div></div>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Confirm Modal */}
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Test Participate Confirmation</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            Are you sure you want to take this test?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary text-white" data-dismiss="modal">Cancle</button>
                            <Link to={`test/${selectedTestId}/take`}>
                            <button type="button" class="btn btn-primary text-white">Yes</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )}
)
