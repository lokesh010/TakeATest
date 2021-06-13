const { Results, Tests, sequelize, Questions, Answers, Users } = require("../models");

// Admin Routes
exports.getAll = async (req, res) => {
  
  try {
    const results = await Results.findAll({
      // where selected correct answers
      where: {correct: true, chosen: true},
      
      group: ['UserId','TestId', 'take_count'],

      include: [
        {model: Tests, attributes: ['id', 'name', 'passMarks', 'totalMarks'] },
        {model: Users, attributes: ['id', 'fullName'] }
      ],
      
      attributes:[
        'UserId','TestId', 'take_count',
      [sequelize.fn('sum',sequelize.col('marks')), 'obtainedMarks'] // total correct marks
    ],
    order: [['createdAt']],
    })

    return res.json(results);
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      error: "Error when getting results",
    });
  }
}
exports.getUserTestAnswers = async (req, res) => {
  const { UserId, TestId, take_count } = req.params;
  try {
    const testResults = await Results.findAll({
      where: {
        UserId: UserId,
        TestId,
        take_count
      },
      include: [
        { model: Questions, attributes: ['id', 'question'] },
        { model: Answers, attributes: ['id', 'answer'] },
      ],
    });

    return res.json(testResults);
  } catch (err) {
    console.log({ err })
    return res.status(400).json({
      error: "Error when get your results",
    });
  }
}

// Student Routes
exports.create = async (req, res) => {
  try {
    const maxTestCount = await Results.max('take_count', {
      where: {
        UserId: req.user.id,
        QuestionId: req.body[0].QuestionId
      }
    });

    const findTest = await Tests.findByPk(req.body[0].TestId);

    req.body.forEach(async result => {
      await Results.create({
        UserId: req.user.id,
        take_count: Number(maxTestCount) + 1,
        passMarks: findTest.passMarks,
        ...result
      })
    });

    return res.sendStatus(200);
  } catch (err) {
    return res.status(400).json({
      error: "Error when creating a results",
    });
  }
}
exports.getMyResult = async (req, res) => {
  try {
    const myResults = await Results.findAll({
      where: {
        UserId: req.user.id,
        // get correct chosen marks
        correct: true,
        chosen: true
      },
      group: ['TestId', 'take_count'],  // number of times user has taken same test
      attributes: [
        'id', 'TestId', 'take_count',
        [sequelize.fn('sum', sequelize.col('marks')), 'obtainedMarks'], // total correct marks (correct marks by where)
      ],
      include: [
        { model: Tests, attributes: ['id', 'name', 'passMarks', 'totalMarks'] },
      ],
      order: ['TestId', ['take_count', 'DESC']],
    });

    return res.json(myResults);
  } catch (err) {
    console.log({ err })
    return res.status(400).json({
      error: "Error when get your results",
    });
  }
}
exports.getMyTestAnswers = async (req, res) => {
  const { TestId, take_count } = req.params;
  try {
    const myResults = await Results.findAll({
      where: {
        UserId: req.user.id,
        TestId,
        take_count
      },
      include: [
        { model: Questions, attributes: ['id', 'question'] },
        { model: Answers, attributes: ['id', 'answer'] },
      ],
    });

    return res.json(myResults);
  } catch (err) {
    console.log({ err })
    return res.status(400).json({
      error: "Error when get your results",
    });
  }
}