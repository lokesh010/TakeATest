const { Tests, Users, Results, sequelize } = require('../models');

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
    const totalTestsTaken = await getTotalTestsTaken(req.user.id);
    const totalpassedTests = await totalPassedTests(req.user.id);
    const totalfailedTests = await totalFailedTests(req.user.id);

    return res.json({
        totalTestsTaken: totalTestsTaken.length,
        totalpassedTests,
        totalfailedTests
    });
}

// Admin
const getTotalTests = async () => await Tests.count();
const getTotalStudents = async () => await Users.count({ where: { role: 'student' } });
const getTotalAdmin = async () => await Users.count({ where: { role: 'admin' } });
const getTestTakenStudents = async () => await Results.count({ col: 'UserId', distinct: true });

// Student
const getTotalTestsTaken = async (UserId) => await Results.findAll({
    where: { UserId },
    group: ['TestId', 'take_count'],
});
const totalPassedTests = async (UserId) =>{

    const allTestResults = await Results.findAll({
        where: {
            UserId,
            correct: true,
            chosen: true,
        },
        group: ['TestId', 'take_count'],    // group common fields (get every unique tests)
        attributes: [
            'id', 'TestId', 'take_count',
            [sequelize.fn('sum', sequelize.col('marks')), 'obtainedMarks'] //sum corect marks
        ],
        include: [
            { model: Tests, attributes: ['id', 'name', 'passMarks'], paranoid: false }
        ]
    });
    const records = allTestResults.map(result => result.dataValues)

    let passedTest = 0;
    records.map(result=> {
        if(!(Number(result.obtainedMarks) < result.Test.passMarks)){
            passedTest ++ ;
        }
    })

    return passedTest;
} 
const totalFailedTests = async (UserId) =>{
    const allTestResults = await Results.findAll({
        where: {
            UserId,
            correct: true,
            chosen: true,
        },
        group: ['TestId', 'take_count'],    // group common fields (get every unique tests)
        attributes: [
            'id', 'TestId', 'take_count',
            [sequelize.fn('sum', sequelize.col('marks')), 'obtainedMarks'] //sum corect marks
        ],
        include: [
            { model: Tests, attributes: ['id', 'name', 'passMarks'], paranoid: false }
        ]
    });
    const records = allTestResults.map(result => result.dataValues)

    let failedTest = 0;
    records.map(result=> {
        if(Number(result.obtainedMarks) < result.Test.passMarks){
            failedTest ++ ;
        }
    })

    return failedTest;
}