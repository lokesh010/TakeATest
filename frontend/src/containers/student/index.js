import React, { useState, useEffect } from "react";
// component
import Results from '../../component/student/tables/myResultList'
import StudentDashboardCards from '../../component/student/dashboard'
// layout
import StudentDashboardLayout from '../../layouts/student-dashboard.layout'
// action
import { getStudentDashboard } from "../../action/dashboardAction";
import { getMyResult } from "../../action/resultsAction";

const StudentHome = () => {

  const [results, setResults] = useState([]);

  const [cardValues, setCardValues] = useState({
    totalTestsTaken: 1,
    totalpassedTests: 0,
    totalfailedTests: 0,
  });

  useEffect(async () => {
    const studentDashboard = await getStudentDashboard();
    setCardValues(studentDashboard);
    const getResults = await getMyResult();
    setResults(getResults);
  }, [])


  return (
    <StudentDashboardLayout title={"Dashboard"}>
        <StudentDashboardCards cardValues={cardValues}/>
        {/* Test List */}
        <Results resultList={results} />
    </StudentDashboardLayout>
  );
};

export default StudentHome;
