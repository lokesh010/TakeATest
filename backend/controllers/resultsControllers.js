const { Results, Tests, sequelize } = require("../models");

exports.create = async (req, res) => {
  try {
    const maxTestCount = await Results.max('take_count', { where: {
      UserId: req.user.id,
      QuestionId: req.body[0].QuestionId 
    } });

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
    const myResults = await Results.findAll({where:{
      UserId: req.user.id,
    },
    group:['QuestionId','TestId','take_count'],
    attributes: [
      'id','QuestionId','TestId','marks'
      // total marks by questionId
    // [ sequelize.fn('sum', sequelize.col('marks')), 'totalMarks'],
    // total obtainedMarks by sum(correct:1, choose:1)
  ],
    include: [
      { model: Tests },
    ]
    });

    return res.json(myResults);
  } catch (err) {
    console.log({err})
    return res.status(400).json({
      error: "Error when get your results",
    });
  }
}
