import React, { useEffect, useState } from 'react'
// layout
import AdminDashboardLayout from '../../layouts/admin-dashboard.layout'
// actions
import { read } from '../../action/testAction'
import { create } from '../../action/questionAction'

const initialQuestionModel = {
    question: "",
    marks: null,
    answers: [
        {
            answer: "",
            correct: true
        },
        {
            answer: "",
            correct: false
        },
        {
            answer: "",
            correct: false
        },
    ]
}

export default () => {
    const [testList, setTestList] = useState([]);
    const [selectTest, setSelectTest] = useState({});
    const [questions, setQuestions] = useState([initialQuestionModel]);

    // QUESTION ITERATION
    const addQuestionHandler = () => setQuestions([...questions, initialQuestionModel]);
    const marksChangeHandler = (e, questionIndex) => setQuestions(
        questions.map((question, i) => {
            if (i === questionIndex) {
                return {
                    ...question,
                    marks: e.target.value
                }
            } else {
                return question
            }
        })
    );
    const questionChangeHandler = (e, i) => {
        setQuestions(questions.map((questionObj, i2) => {
            if (i === i2) {
                return {
                    ...questionObj,
                    question: e.target.value
                }
            } else {
                return questionObj
            }
        }))
    }
    const deleteQuestionHandler = i => questions.length > 1 && setQuestions(questions.filter((q, index) => index !== i));
    // ANSWER ITERATION
    const answerChangeHandler = (questionIndex, answerIndex, e) => {
        setQuestions(questions.map((question, i) => {
            if (i === questionIndex) {
                return {
                    ...question,
                    answers: question.answers.map((answer, i2) => {
                        if (i2 === answerIndex) {
                            return {
                                ...answer,
                                answer: e.target.value
                            }
                        } else {
                            return answer;
                        }
                    })
                }
            } else {
                return question
            }
        }))

    }
    // CHECKBOX ITERATION
    const checkboxChangeHandler = (questionIndex, answerIndex, e) => {
        if (e.target.checked) { // only if truthy, dont allow to uncheck
            setQuestions(questions.map((question, i) => {
                if (i === questionIndex) {
                    return {
                        ...question,
                        answers: question.answers.map((answer, i2) => {
                            if (i2 === answerIndex) {
                                return {
                                    ...answer,
                                    correct: true
                                }
                            } else {
                                return {
                                    ...answer,
                                    correct: false
                                }
                            }
                        })
                    }
                } else {
                    return question
                }
            }))
        }
    }
    const submitForm = async e => {
        e.preventDefault();
        // validation
        questions.map((question, i) => {
            if (!question.question || !question.marks) {
                return alert(`A Question field is empty on position: ${i + 1}`)
            }
            question.answers.map((answer, i2) => {
                if (!answer.answer) {
                    return alert(`An Answer field is empty on question: ${i + 1} and answer ${i2 + 1}`)
                }
            })
        })
        if (
            (function () {
            let count = 0;
            questions.map(question => count = count + Number(question.marks));
            return count;
        }())
         !==
         selectTest.totalMarks)
         {
            return alert(`test total marks and question's marks are not equal`);
        }
        await create({ testId: selectTest.id, questions });
        // reset fields
        setQuestions([initialQuestionModel]);

        alert('Submitted!');

    }

    useEffect(async () => {
        const getAllTests = await read();
        setTestList(getAllTests);
        // select a default test
        setSelectTest(getAllTests.length && getAllTests[0]);
    }, [])

    return (
        <AdminDashboardLayout title={"Questions and Answers"}>
            {/* Container fluid  */}
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12 col-lg-12 col-sm-12">
                        <div class="white-box">
                            {/* test selection */}
                            <div class="mb-3">
                                <h3 class="box-title mb-0">Create Questions for Test</h3>
                                <br />
                                <div className="w-25">
                                    <span className="text-bold">Choose a Test:</span>
                                    {/* select test */}
                                    <select class="form-select shadow-none border-top"
                                        value={selectTest ? selectTest.id : null}
                                        onChange={e => setSelectTest(
                                            testList.find(test => test.id == e.target.value)
                                        )}>
                                        {testList.length &&
                                            testList.map(test =>
                                                <option value={test.id}>{test.name}</option>
                                            )
                                        }
                                    </select>
                                    <br />
                                </div>
                                {/* marks */}
                                <span>
                                    <i>Required Total Marks: </i>
                                    <b>{selectTest && selectTest.totalMarks}</b>
                                </span>
                                <br />
                                <span>
                                    <i>Questions Total Marks: </i>
                                    {/* IIFE */}
                                    <b>
                                        {(function () {
                                            let count = 0;
                                            questions.map(question => count = count + Number(question.marks));
                                            return count;
                                        }())}
                                    </b>
                                </span>
                            </div>
                            {/* questions accordion */}
                            <div id="accordion">
                                {questions.length && questions.map((question, i) =>
                                    <div class="card shadow">
                                        {/* Accordion header */}
                                        <div class="card-header bg-dark text-white btn text-left" id="headingOne" data-target={`#${i}`} data-toggle="collapse" aria-expanded="true" aria-controls="collapseOne">
                                            <h5 class="my-2 p-2">
                                                {i + 1}) {question.question} <b>{question.marks ? `[${question.marks}]` : null}</b>
                                            </h5>
                                        </div>

                                        {/* Accordion Body */}
                                        <div id={i} class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div class="card-body bg-light">
                                                {/* input and delete question */}
                                                <div className="d-flex">
                                                    <input class="form-control w-75" placeholder="Enter Question" type="text" required
                                                        value={question.question} onChange={(e) => questionChangeHandler(e, i)}
                                                    />
                                                    <input class="form-control w-25" placeholder="Enter Marks" type="number" required
                                                        value={question.marks} onChange={(e) => marksChangeHandler(e, i)}
                                                    />
                                                    <button className="btn btn-danger ml-auto text-white"
                                                        onClick={() => deleteQuestionHandler(i)}>Delete Question</button>
                                                </div>
                                                <hr />
                                                <div className="d-flex my-3">
                                                    {/* map answers */}
                                                    {question.answers.map((answer, i2) =>
                                                        <div className="w-25">
                                                            {/* checkbox */}
                                                            <span className="mr-2">Correct</span>
                                                            <input type="checkbox"
                                                                checked={answer.correct}
                                                                onChange={e => checkboxChangeHandler(i, i2, e)}
                                                            />
                                                            {/* answer input */}
                                                            <input class="form-control w-75" placeholder="Enter Answer" type="text" required
                                                                value={answer.answer} onChange={(e) => answerChangeHandler(i, i2, e)}
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            {/* add question button */}
                            <div className="text-center">
                                <button className="btn btn-success p-3 text-white" onClick={addQuestionHandler}>
                                    (+) Add Question
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* add question button */}
                    <div className="text-left">
                        <button className="btn btn-primary p-3 text-white" onClick={submitForm}>
                            Submit Form
                        </button>
                    </div>
                </div>

            </div>
        </AdminDashboardLayout>
    )
}

/* get test list
    choose a test to create questions
    create multiple answers for each question (limit 3)
    set marks for each question

    {
        test_id: 1,
        questions:[
            {
                question: 'what is computer'
                answers: [
                    {
                        answer: 'electronic device',
                        correct: true,
                    },
                    {
                        answer: 'animal',
                        correct: false,
                    },
                    {
                        answer: tv,
                        correct: false,
                    }
                ]
            },
            {
                question: 'what is computer'
                answers: [
                    {
                        answer: 'electronic device',
                        correct: true,
                    },
                    {
                        answer: 'animal',
                        correct: false,
                    },
                    {
                        answer: tv,
                        correct: false,
                    }
                ]
            },
        ]
    }
*/