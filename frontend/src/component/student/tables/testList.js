import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const tableColumns = ['S.N', 'Name', 'Description', 'Pass Marks', 'Total Marks', 'Actions'];

export default React.memo(({ testList }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [selectedTestId, setselectedTestId] = useState(1);
    return (
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
                                                <Button variant="primary" onClick={()=> {
                                                    handleShow();
                                                    setselectedTestId(test.id);
                                                    }}>
                                                    Take Test
                                                </Button>
                                                {/* <button className="btn btn-primary text-white"
                                                    data-toggle="modal" data-target="#exampleModal"
                                                    onClick={() => setselectedTestId(test.id)}>
                                                    Take Test
                                                </button> */}
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
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Participate Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to take this test?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-secondary" onClick={handleClose}>
                            No
                        </Button>
                        <Link to={`/student/test/${selectedTestId}/take`}>
                        <Button variant="primary" onClick={handleClose}>
                            Yes
                        </Button>
                        </Link>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}
)