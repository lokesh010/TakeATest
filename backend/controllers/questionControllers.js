const { Questions } = require("../models");

/*
{
   testId: 1,
   questions: [ { question: 'mt everest', marks: '100', answers: [Array] } ]
 }
*/
exports.createWithAnswers = async (req, res) => {
  
  const {testId, questions} = req.body;

  try{
    
    questions.forEach(async question => {
      const {answers, ...restQuestion} = question;
       await Questions.create({TestId: testId,...restQuestion});
    });

    return res.json(createdTest);
  }catch(err){
    return res.status(400).json({
      error: "Error when creating a test",
    });
  }
}

exports.read = async (req, res) => {
  try{
    const testList = await Questions.findAll({order: ['createdAt']}); 

    return res.json(testList);
  }catch(err){
    return res.status(400).json({
      error: "Error getting tests",
    });
  }
}

exports.destroy = async (req, res) => {
  try{
    const deletedTest = await Tests.destroy({where: {id: req.params.id}}); 

    return res.json(deletedTest);
  }catch(err){
    return res.status(400).json({
      error: "Error deleting test",
    });
  }
}