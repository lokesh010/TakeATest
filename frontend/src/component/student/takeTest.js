import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
// layout
import StudentDashboardLayout from '../../layouts/student-dashboard.layout'
// action
import { getTestQuestions } from '../../action/testAction'

const Test = () => {
    const { id } = useParams();

    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);

    // CHECKBOX ITERATION
    const checkboxChangeHandler = (questionId, answerId) => {
        setAnswers(answers.map(answer => {
            // find question
            if (answer.questionId === questionId) {
                if (answer.answerId === answerId) {
                    return {
                        ...answer,
                        mark: !answer.mark
                    }
                } else {
                    // unmark all question answers
                    return {
                        ...answer,
                        mark: false
                    }
                }

            } else {
                return answer
            }
        }))
    }

    // const submitForm = () => 

    useEffect(async () => {
        const getQuestions = await getTestQuestions(id);
        setQuestions(getQuestions);

        let allAnswers = [];

        getQuestions.map(question =>
            question.Answers.map(answer => {
                allAnswers.push({
                    questionId: answer.QuestionId,
                    answerId: answer.id,
                    correct: answer.correct,
                    mark: false
                })
            })
        )
        setAnswers(allAnswers);
    }, [])
    console.log(answers.length && answers.find(({ answerId }) => answerId === 4))
    return (
        <StudentDashboardLayout title={"Test"}>
            {/* Container fluid  */}
            <div className="container-fluid">
                {/* questions accordion */}
                <div id="accordion">
                    {questions.length && questions.map((question, i) =>
                        <div className="card shadow">
                            {/* Accordion header */}
                            <div className="card-header bg-dark text-white btn text-left" id="headingOne" data-target={`#${i}`} data-toggle="collapse" aria-expanded="true" aria-controls="collapseOne">
                                <h5 className="my-2 p-2">
                                    {i + 1}) {question.question} <b>{question.marks ? `[${question.marks}]` : null}</b>
                                </h5>
                            </div>

                            {/* Accordion Body */}
                            <div id={i} className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                <div className="card-body bg-light">
                                    <div className="d-flex ">
                                        {/* map answers */}
                                        {question.Answers.map((answer, i2) =>
                                            <div className="w-25 d-flex" style={{ alignItems: 'baseline' }}>
                                                {/* checkbox */}
                                                <input type="checkbox"
                                                    checked={
                                                        answers.length &&
                                                        answers.find(({ answerId }) => answerId === answer.id).mark
                                                    }
                                                    onChange={e => checkboxChangeHandler(question.id, answer.id)}
                                                />
                                                {/* answer input */}
                                                <label className="form-control w-75 ml-1" placeholder="Enter Answer" type="text" required>
                                                    {answer.answer} </label>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {/* add question button */}
                <div className="text-left">
                        <button className="btn btn-success p-3 text-white" 
                        // onClick={submitForm}
                        >
                            Submit 
                        </button>
                    </div>
                
            </div>
        </StudentDashboardLayout>
    );
};

export default Test;

/*
anwers: [
    {
        questionId: answer.QuestionId,
        answerId: answer.id,
        correct,
        marked: false
    }
]
*/