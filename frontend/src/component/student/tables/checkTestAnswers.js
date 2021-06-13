import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'
// layout
import StudentDashboardLayout from '../../../layouts/student-dashboard.layout'
// action
import { getMyTestAnswers, getUserTestAnswers } from '../../../action/resultsAction'

const CheckTestAnswers = ({role}) => {
    const { UserId, TestId, take_count } = useParams();

    const [testAnswers, setTestAnswers] = useState([]);
    const [uniqueQuestions, setUniqueQuestions] = useState([]);

    useEffect(async () => {
        let testAnswers = [];

        if(role === 'admin'){
            testAnswers = await getUserTestAnswers(UserId, TestId, take_count);
        }else {
            testAnswers = await getMyTestAnswers(TestId, take_count);

        }
        setTestAnswers(testAnswers);

        // unique Questions
        let uniqueQuestionArr = [];
        testAnswers.map(result => {
            const findQuestion = uniqueQuestionArr && uniqueQuestionArr.find(obj => obj.id === result.QuestionId);
            if (!findQuestion) {
                uniqueQuestionArr.push(result.Question);
            }
        })
        setUniqueQuestions(uniqueQuestionArr);

    }, [])

    return (
        <StudentDashboardLayout title={"Test"}>
            {/* Container fluid  */}
            <div className="container-fluid">
                {/* Questions accordion */}
                <div id="">
                    {uniqueQuestions.length && uniqueQuestions.map((question, i) =>
                        <div className="card shadow" key={i}>
                            {/* Accordion header */}
                            <div className="card-header bg-dark text-white text-left">
                                <h5 className="my-2 p-2">
                                    {i + 1}) {question.question} <b>[ {testAnswers.find(result => result.QuestionId === question.id).marks} ]</b>
                                </h5>
                            </div>

                            {/* Answers */}
                            <div className="row">
                                {testAnswers.map(result =>
                                    (result.QuestionId === question.id) &&
                                    <div id={result.id} className="col-md-2 col-sm-12">
                                        <div className="card-body">
                                            <div>
                                                {/* answers */}
                                                <div style={{ alignItems: 'baseline' }} key={result.Answer.id}>
                                                    {/* checkbox */}
                                                    <input type="checkbox"
                                                        checked={result.chosen}
                                                    />
                                                    {/* answer */}
                                                    <label className={` ml-1 
                                                            ${(result.correct) ? 'text-success' :
                                                            (!result.correct && result.chosen) ? 'text-danger' : null}
                                                            `}
                                                        style={{ cursor: 'pointer' }}>
                                                        {result.Answer.answer}
                                                    </label>
                                                </div>
                                                {/* )} */}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                        </div>
                    )}
                </div>
                    {/* go back button */}
                <Link to={role==='admin'? `/admin/test/results`: `/student/results`}>
                    <div className="text-left">
                        <button className="btn btn-primary p-3 text-white">
                            Go Back
                        </button>
                    </div>
                </Link>
            </div>
        </StudentDashboardLayout>
    );
};

export default CheckTestAnswers;