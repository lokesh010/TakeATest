import React, { useEffect, useState } from 'react'
// layout
import AdminDashboardLayout from '../../layouts/admin-dashboard.layout'
// components
import CreateQuestions from '../../component/admin/forms/questions.create'
// actions
import { read } from '../../action/testAction'
import { create } from '../../action/questionAction'

const initialQuestionModel = {
    question: "",
    marks: '',
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
        // IIFE
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
                <CreateQuestions 
                    // test selection
                    selectTest={selectTest}
                    setSelectTest={setSelectTest}
                    testList={testList}
                    selectTest={selectTest}
                    // create questions
                    questions={questions}
                    questionChangeHandler={questionChangeHandler}
                    marksChangeHandler={marksChangeHandler}
                    deleteQuestionHandler={deleteQuestionHandler}
                    checkboxChangeHandler={checkboxChangeHandler}
                    answerChangeHandler={answerChangeHandler}
                    addQuestionHandler={addQuestionHandler}
                    submitForm={submitForm}
                />
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