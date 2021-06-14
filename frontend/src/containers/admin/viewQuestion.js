import React,{ useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// components
import ViewQuestions from '../../component/admin/viewQuestions'
import AdminDashboardLayout from '../../layouts/admin-dashboard.layout'
// actions
import { getTestQuestions } from '../../action/testAction'

export default React.memo(()=> {
    const { id } = useParams();
    const [questions, setQuestions] = useState([]);

    useEffect(async () => {
        const getQuestions = await getTestQuestions(id);
        console.log(getQuestions);
        setQuestions(getQuestions);
    }, [])

    return (
        <AdminDashboardLayout title={"Test Questions"}>
            <ViewQuestions questions={questions} />
        </AdminDashboardLayout>
    )
})
