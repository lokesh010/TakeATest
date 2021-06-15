import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
// layout
import StudentDashboardLayout from '../../layouts/student-dashboard.layout'
//components
import TestAnswers from '../../component/testAnswers'
// action
import { getMyTestAnswers } from '../../action/resultsAction'

export default () => {

    const { TestId, take_count } = useParams();

    const [testAnswers, setTestAnswers] = useState([]);
    const [uniqueQuestions, setUniqueQuestions] = useState([]);

    useEffect(async () => {
        const testAnswers = await getMyTestAnswers(TestId, take_count);
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
        <StudentDashboardLayout title={"Test Answers"}>
            <TestAnswers
                uniqueQuestions={uniqueQuestions}
                testAnswers={testAnswers}
                role={"student"}
            />
        </StudentDashboardLayout>
    )
};