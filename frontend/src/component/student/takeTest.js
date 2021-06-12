import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
// layout
import StudentDashboardLayout from '../../layouts/student-dashboard.layout'
// components
import TestList from './tables/testList'
// action
import { create, read, destroy } from '../../action/testAction'

const Test = () => {
    const { id }= useParams();

    const [testList, setTestList] = useState([]);
    const [form, setForm] = useState({
        name: '',
        description: '',
        totalMarks: null,
        passMarks: null
    })

    const changeHandler = ({ target: { name, value } }) =>
        setForm({
            ...form,
            [name]: (name === 'totalMarks' || name === 'passMarks') ? Number(value) : value
        })

    const submitForm = async (e) => {
        if(form.passMarks > form.totalMarks){
            return alert('Pass marks cannot be greater than total')
        }

        e.preventDefault();
        const createdForm = await create(form);
        // reset values
        setForm({
            name: '',
            description: '',
            totalMarks: 0,
            passMarks: 0
        })

        setTestList([createdForm, ...testList]);
    }

    const deleteHandler = async (id)=> {
        await destroy(id);
        setTestList(testList.filter(test=> test.id !== id));
    }

    useEffect(async () => {
        const getTestList = await read();
        setTestList(getTestList);
    }, [])

    return (
        <StudentDashboardLayout title={"Test"}>
            {/* Container fluid  */}
            <div className="container-fluid">
                Test Appear here
            </div>
        </StudentDashboardLayout>
    );
};

export default Test;
