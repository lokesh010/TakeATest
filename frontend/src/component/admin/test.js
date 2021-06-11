import React, { useState, useEffect } from "react";
// layout
import AdminDashboardLayout from '../../layouts/admin-dashboard.layout'
// components
import TestCreateForm from './forms/test.create'
import TestList from './tables/testList'
// action
import { create, read, destroy } from '../../action/testAction'

const Test = () => {
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
        <AdminDashboardLayout title={"Test"}>
            {/* Container fluid  */}
            <div class="container-fluid">
                {/* create test */}
                <TestCreateForm form={form} changeHandler={changeHandler} submitForm={submitForm} />
                {/* All tests */}
                <TestList testList={testList} deleteHandler={deleteHandler} />
            </div>
        </AdminDashboardLayout>
    );
};

export default Test;
