import React, { useEffect, useState } from 'react'
// layout
import AdminDashboardLayout from '../../layouts/admin-dashboard.layout'
// actions
import { read } from '../../action/testAction'

const initialQuestionModel = {
    question: "",
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

    const addQuestionHandler = () => setQuestions([...questions, initialQuestionModel]);

    // QUESTION ITERATION
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

    useEffect(async () => {
        const getAllTests = await read();
        setTestList(getAllTests);
    }, [])

    return (
        <AdminDashboardLayout title={"Questions and Answers"}>
            {/* Container fluid  */}
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12 col-lg-12 col-sm-12">
                        <div class="white-box">
                            <div class="mb-3">
                                <h3 class="box-title mb-0">Create Questions for Test</h3>
                                <br />
                                {/* test selection */}
                                <div className="w-25">
                                    <span className="text-bold">Choose a Test:</span>
                                    <select class="form-select shadow-none border-top">
                                        {testList.length &&
                                            testList.map(test =>
                                                <option value={test.id}>{test.name}</option>
                                            )
                                        }
                                    </select>
                                </div>

                            </div>
                            {/* questions accordion */}
                            <div id="accordion">
                                {questions.length && questions.map((question, i) =>

                                    <div class="card shadow">
                                        {/* Accordion header */}
                                        <div class="card-header bg-dark text-white btn text-left" id="headingOne" data-target={`#${i}`} data-toggle="collapse" aria-expanded="true" aria-controls="collapseOne">
                                            <h5 class="my-2 p-2">
                                                {i + 1}) {question.question}
                                            </h5>
                                        </div>

                                        {/* Accordion Body */}
                                        <div id={i} class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div class="card-body">
                                                {/* input and delete question */}
                                                <div className="d-flex">
                                                    <input class="form-control w-50" placeholder="Enter Question" type="text" required
                                                        value={question.question} onChange={(e) => questionChangeHandler(e, i)}
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
                                    Add Question
                                </button>
                            </div>
                        </div>
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