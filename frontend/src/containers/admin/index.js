import React, { useState, useEffect } from "react";
// layout
import AdminDashboardLayout from '../../layouts/admin-dashboard.layout'
// components
import ResultList from '../../component/admin/tables/resultList'
import DashboardCards from '../../component/admin/dashboardCards'
// action
import { getAdminDashboard } from '../../action/dashboardAction'
import { getAll } from '../../action/resultsAction'

export default () => {

  const [testResults, setTestResults] = useState([]);

  const [cardValues, setCardValues] = useState({
    totalAdmin: 1,
    totalTests: 0,
    totalStudents: 0,
    countTestTakenStudents: 0
  });

  const [filter, setFilter] = useState('');
  const changeFilter = e => setFilter(e.target.value);

  useEffect(async () => {
    const getAdminCards = await getAdminDashboard();
    setCardValues(getAdminCards);

    const getTestResults = await getAll();
    setTestResults(getTestResults);
  }, [])

  return (
    <AdminDashboardLayout title={"Dashboard"}>
      {/* Cards */}
      <DashboardCards cardValues={cardValues} />
      {/* All Results */}
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
  );
};
