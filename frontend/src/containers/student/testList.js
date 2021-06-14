import React, { useState, useEffect } from "react";
// layout
import StudentDashboardLayout from '../../layouts/student-dashboard.layout'
// components
import TestList from '../../component/student/tables/testList'
// action
import { read } from '../../action/testAction'

const Test = () => {
    const [testList, setTestList] = useState([]);

    useEffect(async () => {
        const getTestList = await read();
        setTestList(getTestList);
    }, [])

    return (
        <StudentDashboardLayout title={"Test"}>
                <TestList testList={testList} />
        </StudentDashboardLayout>
    );
};

export default Test;
