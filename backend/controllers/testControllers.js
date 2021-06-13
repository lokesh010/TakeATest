const { Tests, Questions, Answers } = require("../models");

exports.create = async (req, res) => {
  try {
    const createdTest = await Tests.create(req.body);

    return res.json(createdTest);
  } catch (err) {
    return res.status(400).json({
      error: "Error when creating a test",
    });
  }
}

exports.read = async (req, res) => {
  try {
    const testList = await Tests.findAll({ order: ['createdAt'] });

    return res.json(testList);
  } catch (err) {
    return res.status(400).json({
      error: "Error getting tests",
    });
  }
}

exports.destroy = async (req, res) => {
  try {
    const deletedTest = await Tests.destroy({ where: { id: req.params.id } });

    return res.json(deletedTest);
  } catch (err) {
    return res.status(400).json({
      error: "Error deleting test",
    });
  }
}

exports.questionsByTest = async (req, res) => {
  try {
    const QuestionsByTest = await Questions.findAll({
      where: {
        TestId: req.params.id
      },
      include: [
        { model: Answers },
      ]
    });
    
    return res.json(QuestionsByTest);

  } catch (err) {
    console.log({ err })
    return res.status(400).json({
      error: "Error getting questions by test",
    });
  }
}