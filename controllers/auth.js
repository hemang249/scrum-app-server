const User = require("../db/models/user");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const utils = require("./utils");
const config = require("../common/config");

module.exports = {
  register: async (req, res) => {
    try {
      const { username, email, password, avatar } = req.body;
      const hash = utils.encrypt(password);
      const user = new User({ username, email, avatar, password: hash });
      await user.save();
      res.status(200).json({ user, done: true });
    } catch (err) {
      console.log("register : " + err);
      res.status(400).json({ error: "Unable to create user", done: false });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      const hash = utils.encrypt(password);

      if (hash === user.password) {
        const token = jwt.sign({ _id: user._id }, config.secret);

        res
          .cookie("token", token, { expire: new Date() + 999 })
          .status(200)
          .json({ user, token });
      } else {
        res.status(401).json({ error: "Incorrect email or password" });
      }
    } catch (err) {
      console.log("login " + err);
      res.status(401).json({ error: "Incorrect email or password" });
    }
  },

  isLoggedIn: expressJwt({
    secret: config.secret,
    userProperty: "auth",
  }),

  isAuthenticated: async (req, res) => {
    let check = req.profile && req.auth && req.auth._id == req.profile._id;

    if (!check) {
      res.status(401).json({ error: "You are unauthorised" });
    } else {
      next();
    }
  },

  getUserById: async (req, res, next, id) => {
    try {
      const user = await User.findOne({ _id: id });
      req.profile = user;
      next();
    } catch (err) {
      res
        .status(404)
        .json({ error: "No such user exists! Please login again" });
    }
  },
};
