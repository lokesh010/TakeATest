import React, { useState, useEffect } from "react";
import { useParams, withRouter } from 'react-router-dom'
// layout
import StudentDashboardLayout from '../../layouts/student-dashboard.layout'
// component
import TakeTest from '../../component/student/takeTest'
// action
import { create } from '../../action/resultsAction'
import { getTestQuestions } from '../../action/testAction'

const Test = ({ history }) => {
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

        if (submit.status === 200) {
            history.push('/student/results')
        }
    }

    useEffect(async () => {
        const getQuestions = await getTestQuestions(id);
        setQuestions(getQuestions);

        let allAnswers = [];

        getQuestions.length && getQuestions.map(question =>
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
            {/* Accordion */}
            <TakeTest
                questions={questions}
                answers={answers}
                checkboxChangeHandler={checkboxChangeHandler}
                submitForm={submitForm}
            />
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