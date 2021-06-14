import React, { useState, useEffect } from "react";
import { useParams,withRouter } from 'react-router-dom'
// layout
import StudentDashboardLayout from '../../layouts/student-dashboard.layout'
// action
import { create } from '../../action/resultsAction'
import { getTestQuestions } from '../../action/testAction'

const Test = ({history}) => {
    const { id } = useParams();

    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);

    // CHECKBOX ITERATION
    const checkboxChangeHandler = (questionId, answerId) => {
        setAnswers(answers.map(answer => {
            // find question
            if (answer.QuestionId === questionId) {
                if (answer.AnswerId === answerId) {
                    return {
                        ...answer,
                        chosen: !answer.chosen
                    }
                } else {
                    // unchoose all question answers
                    return {
                        ...answer,
                        chosen: false
                    }
                }

            } else {
                return answer
            }
        }))
    }

    const submitForm = async (e) => {
        e.preventDefault();

        const submit = await create(answers);

        if(submit.status === 200){
            history.push('/student/results')
        }
    }

    useEffect(async () => {
        const getQuestions = await getTestQuestions(id);
        setQuestions(getQuestions);

        let allAnswers = [];

        getQuestions.map(question =>
            question.Answers.map(answer => {
                allAnswers.push({
                    marks: question.marks,
                    correct: answer.correct,
                    chosen: false,
                    TestId: Number(id),
                    QuestionId: answer.QuestionId,
                    AnswerId: answer.id
                })
            })
        )
        setAnswers(allAnswers);
    }, [])

    return (
        <StudentDashboardLayout title={"Test"}>
            {/* Container fluid  */}
            <div className="container-fluid">
                {/* questions accordion */}
                <div id="accordion">
                    {questions.length && questions.map((question, i) =>
                        <div className="card shadow" key={i}>
                            {/* Accordion header */}
                            <div className="card-header bg-dark text-white text-left" id="headingOne" >
                                <h5 className="my-2 p-2">
                                    {i + 1}) {question.question} <b>{question.chosens ? `[${question.chosens}]` : null}</b>
                                </h5>
                            </div>

                            {/* Accordion Body */}
                            <div id={i} className="collapse show">
                                <div className="card-body bg-light">
                                    <div className="d-flex ">
                                        {/* map answers */}
                                        {question.Answers.map((answer, i2) =>
                                            <div className="w-25 d-flex" style={{ alignItems: 'baseline' }} key={i2}>
                                                {/* checkbox */}
                                                <input type="checkbox"
                                                    checked={
                                                        answers.length &&
                                                        answers.find(({ AnswerId }) => AnswerId === answer.id).chosen
                                                    }
                                                    onChange={e => checkboxChangeHandler(question.id, answer.id)}
                                                />
                                                {/* answer input */}
                                                <label className="w-50 ml-1"
                                                style={{cursor: 'pointer'}}
                                                onClick={e => checkboxChangeHandler(question.id, answer.id)}>
                                                    {answer.answer}</label>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {/* submit button */}
                <div className="text-left">
                    <button className="btn btn-success p-3 text-white"
                        onClick={submitForm}
                    >
                        Submit
                    </button>
                </div>

            </div>
        </StudentDashboardLayout>
    );
};

export default withRouter(Test);

/*
anwers: [
    {
       marks: question.marks,
        correct: answer.correct,
        chosen: false,
        testId: Number(id),
        questionId: answer.QuestionId,
        answerId: answer.id
    }
]
*/