import React from 'react'

const tableColumns = ['S.N', 'Name', 'Description', 'Pass Marks', 'Total Marks', 'Actions'];

export default React.memo(({ testList, deleteHandler }) =>
    <div class="row">
        <div class="col-md-12 col-lg-12 col-sm-12">
            <div class="white-box">
                <div class="d-md-flex mb-3">
                    <h3 class="box-title mb-0">All Tests</h3>
                </div>
                <div class="table-responsive">
                    <table class="table no-wrap">
                        {/* table head */}
                        <thead>
                            <tr>
                                {tableColumns.map(column => <th class="border-top-0">{column}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {testList.length ?
                                testList.map((test, i) =>
                                    <tr>
                                        <td>{i + 1}</td>
                                        <td class="txt-oflo">{test.name}</td>
                                        <td>{test.description}</td>
                                        <td class="text-info">{test.passMarks}</td>
                                        <td><span class="text-success">{test.totalMarks}</span></td>
                                        <td><button class="btn btn-danger" onClick={() => deleteHandler(test.id)}>Delete</button></td>
                                    </tr>
                                )
                                : <div className="mt-4"><div>No data available</div></div>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
)
