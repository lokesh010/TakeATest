import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
// layout
import AdminDashboardLayout from '../layouts/admin-dashboard.layout'
import StudentDashboardLayout from '../layouts/student-dashboard.layout'
//components
import TestAnswers from '../component/testAnswers'
// action
import { getMyTestAnswers, getUserTestAnswers } from '../action/resultsAction'

const CheckTestAnswers = ({ role }) => {
    const { UserId, TestId, take_count } = useParams();

    const [testAnswers, setTestAnswers] = useState([]);
    const [uniqueQuestions, setUniqueQuestions] = useState([]);

    function component() {
        return (
            <TestAnswers
                uniqueQuestions={uniqueQuestions}
                testAnswers={testAnswers}
                role={role}
            />
        )
    }
    function DynamicLayout() {

        if (role === 'admin') {
            return <AdminDashboardLayout title={"Test Answers"}>{component()}</AdminDashboardLayout>
        } else {
            return <StudentDashboardLayout title={"Test Answers"}>{component()}</StudentDashboardLayout>

        }
    }

    useEffect(async () => {
        let testAnswers = [];
        if (role === 'admin') {
            testAnswers = await getUserTestAnswers(UserId, TestId, take_count);
        } else if (role === 'student'){
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

    return DynamicLayout();
};

export default CheckTestAnswers;