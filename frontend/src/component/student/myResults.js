import React, { useState, useEffect } from "react";
// layout
import StudentDashboardLayout from '../../layouts/student-dashboard.layout'
// component
import MyResults from './tables/myResultList'
// action
import { getMyResult } from '../../action/resultsAction'

const Test = () => {

    const [results, setResults] = useState([]);

    useEffect(async () => {
        const getResults = await getMyResult();
        setResults(getResults);
    }, [])

    console.log(results)
    return (
        <StudentDashboardLayout title={"My Results"}>
            {/* Container fluid  */}
            <div className="container-fluid">
                <MyResults resultList={results}/>
            </div>
        </StudentDashboardLayout>
    );
};

export default Test;

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