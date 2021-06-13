import React from 'react'

const tableColumns = ['S.N', 'Name', 'Description', 'Pass Marks', 'Total Marks', 'Actions'];

export default React.memo(({ testList, deleteHandler }) =>
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
                                {tableColumns.map((column, i) => <th className="border-top-0" key={i}>{column}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {testList.length ?
                                testList.map((test, i) =>
                                    <tr  key={i}>
                                        <td>{i + 1}</td>
                                        <td className="txt-oflo">{test.name}</td>
                                        <td>{test.description}</td>
                                        <td className="text-info">{test.passMarks}</td>
                                        <td><span className="text-success">{test.totalMarks}</span></td>
                                        <td><button className="btn btn-danger" onClick={() => deleteHandler(test.id)}>Delete</button></td>
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
