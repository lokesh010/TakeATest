import React, { useEffect, useState } from 'react'
// components
import ResultList from '../../component/admin/tables/resultList'
import AdminDashboardLayout from '../../layouts/admin-dashboard.layout'
// action
import { getAll } from '../../action/resultsAction'

export default () => {

    const [testResults, setTestResults] = useState([]);

    useEffect(async () => {
        const getTestResults = await getAll();
        setTestResults(getTestResults);
    }, [])

    return (
        <AdminDashboardLayout title={"Test Results"}>
                <ResultList testResults={testResults} />
        </AdminDashboardLayout>
    )
}
