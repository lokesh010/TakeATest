import React, { useEffect, useState } from 'react'
// components
import ResultList from '../../component/admin/tables/resultList'
import AdminDashboardLayout from '../../layouts/admin-dashboard.layout'
// action
import { getAll } from '../../action/resultsAction'

export default () => {

    const [testResults, setTestResults] = useState([]);
    const [filter, setFilter] = useState('');

    const changeFilter = e => setFilter(e.target.value);

    useEffect(async () => {
        const getTestResults = await getAll();
        setTestResults(getTestResults);
    }, [])

    return (
        <AdminDashboardLayout title={"Test Results"}>
            <ResultList
                testResults={
                    filter === 'passed' ?
                        testResults.filter(test => test.obtainedMarks >= test.Test.passMarks) :
                        filter === 'failed' ?
                            testResults.filter(test => test.obtainedMarks < test.Test.passMarks) :
                            testResults
                }
                setFilter={changeFilter}
            />
        </AdminDashboardLayout>
    )
}
