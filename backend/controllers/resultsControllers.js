const { Results, Tests, sequelize, Questions, Answers } = require("../models");

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

// Student Routes
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
        [sequelize.fn('sum', sequelize.col('marks')), 'obtainedMarks'], // total correct marks by questionId
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
      // attributes:['id','chosen', 'AnswerId'],
      include: [
        { model: Questions, attributes: ['id', 'question'] },
        { model: Answers, attributes: ['id', 'answer'] },
      ],
    });

    let resDTO = []; 

    const uniqueQuestions = [...new Set(myResults.map(({Question})=> Question.id))];
    // [2,3,4]
    
    console.log(uniqueQuestions);

    return res.json(myResults);
  } catch (err) {
    console.log({ err })
    return res.status(400).json({
      error: "Error when get your results",
    });
  }
}
