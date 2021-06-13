const { Tests, Users, Results } = require('../models');

exports.getAdminDashboard = async (req, res) => {

    const totalTests = await getTotalTests();
    const totalStudents = await getTotalStudents();
    const totalAdmin = await getTotalAdmin();
    const countTestTakenStudents = await getTestTakenStudents();

    return res.json({
        totalAdmin,
        totalStudents,
        totalTests,
        countTestTakenStudents
    })
}

exports.getStudentDashboard = async (req, res) => {
    return res.json();
}

// Admin
const getTotalTests = async () => await Tests.count();
const getTotalStudents = async () => await Users.count({where: {role: 'student' } });
const getTotalAdmin = async () => await Users.count({where: {role: 'admin' } });
const getTestTakenStudents = async () => await Results.count({col: 'UserId', distinct: true });

// Student