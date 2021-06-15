import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
// layout
import AdminDashboardLayout from '../../layouts/admin-dashboard.layout'
//components
import TestAnswers from '../../component/testAnswers'
// action
import { getUserTestAnswers } from '../../action/resultsAction'

const CheckUserTestAnswers = () => {
    const { UserId, TestId, take_count } = useParams();

    const [testAnswers, setTestAnswers] = useState([]);
    const [uniqueQuestions, setUniqueQuestions] = useState([]);

    useEffect(async () => {
        const testAnswers = await getUserTestAnswers(UserId, TestId, take_count);
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
        <AdminDashboardLayout title={"Test Answers"}>
            <TestAnswers
                uniqueQuestions={uniqueQuestions}
                testAnswers={testAnswers}
                role={"admin"}
            />
        </AdminDashboardLayout>
    )
};

export default CheckUserTestAnswers;