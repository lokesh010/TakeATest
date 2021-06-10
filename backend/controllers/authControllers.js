const { Users } = require("../models");
const { hash, compare } = require("bcrypt");
const shortId = require("shortid");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

// user signup
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

// user signin
exports.signin = async (req, res) => {
  const { email, password } = req.body;

  //check if user exist
  const findUser = await Users.findOne({ where: { email } });
  if (!findUser) {
    return res.status(400).json({
      error: "Invalid Credentials",
    });
  }
  const match = await compare(password, findUser.password);
  if(!match){
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

exports.authMiddleware = (req, res, next) => {
  const authUserId = req.user._id;
  User.findById({ _id: authUserId }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not found",
      });
    }
    req.profile = user;
    next();
  });
};

exports.adminMiddleware = (req, res, next) => {
  const adminUserId = req.user._id;
  User.findById({ _id: adminUserId }).exec((err, user) => {
    if (err || !user) {
      return status(400).json({
        error: "Admin User not found",
      });
    }
    if (user.role !== 1) {
      return res.status(400).json({
        error: "Admin resource Access denied",
      });
    }
    next();
  });
};
