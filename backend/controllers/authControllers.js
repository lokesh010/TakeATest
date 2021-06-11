const { Op } = require("sequelize");
const { Users } = require("../models");
const { hash, compare } = require("bcrypt");
const shortId = require("shortid");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

// student signup
exports.signup = async (req, res) => {

  const findDuplicate = await Users.findOne({ where: { email: req.body.email } });
  if (findDuplicate) {
    return res.status(400).json({
      error: "Email is already taken",
    });
  }
  // hash password
  await hash(req.body.password, 10, async function (err, hash) {
    await Users.create({
      ...req.body,
      password: hash,
      role: 'student'
    });
  });

  return res.json({
    message: "Signup Success! Please Login.",
  });


};
// student signup
exports.registerAdmin = async (req, res) => {

  const findDuplicate = await Users.findOne({ where: { email: req.body.email } });
  if (findDuplicate) {
    return res.status(400).json({
      error: "Email is already taken",
    });
  }
  // hash password
  await hash(req.body.password, 10, async function (err, hash) {
    await Users.create({
      ...req.body,
      password: hash,
      role: 'admin'
    });
  });

  return res.json({
    message: "Signup Success! Please Login.",
  });


};

// student signin
exports.studentSignin = async (req, res) => {
  const { email, password } = req.body;

  //check if user exist
  const findUser = await Users.findOne({ where: { [Op.and]: [{ email }, { role: 'student' }] } });
  await createJWT(findUser, password, res);

};

// admin signin
exports.adminSignin = async (req, res) => {
  const { email, password } = req.body;

  //check if user exist
  const findUser = await Users.findOne({ where: { [Op.and]: [{ email }, { role: 'admin' }] } });
  await createJWT(findUser, password, res);
};

exports.signout = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "Signout success",
  });
};

exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
});

// Middlewares
exports.authMiddleware = async (req, res, next) => {  
  const tokenpayload = getTokenUser(req,res);

  if(!tokenpayload){
    return res.status(400).json({
      error: "Access denied",
    });
  }

  const user = await Users.findByPk(tokenpayload.id);

  if (!user){
    return res.status(400).json({
      error: "Private resource Access denied",
    });
  }
  next();
};

exports.adminMiddleware = async (req, res, next) => {
  const tokenpayload = getTokenUser(req,res);

  if(!tokenpayload){
    return res.status(400).json({
      error: "Access denied",
    });
  }

  const user = await Users.findByPk(tokenpayload.id);

  if (!user || user.role !== 'admin'){
    return res.status(400).json({
      error: "Admin resource Access denied",
    });
  }
  next();

};

async function createJWT(findUser, password, res) {

  if (!findUser) {
    return res.status(400).json({
      error: "Invalid Credentials",
    });
  }
  const match = await compare(password, findUser.password);
  if (!match) {
    return res.status(400).json({
      error: "Invalid Credentials",
    });
  }

  // generate a token and send to client
  const token = jwt.sign({ id: findUser.id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("token", token, { expiresIn: "1d" });
  return res.json({
    token,
    user: findUser,
  });
}

function getTokenUser(req,res){
  const rawToken = req.headers['set-cookie'][0];

  return jwt.decode(rawToken);
}