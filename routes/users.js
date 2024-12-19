const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
// Load User model
const User = require("../models/User");
const { forwardAuthenticated } = require("../config/auth");

// Login Page
router.get("/login", forwardAuthenticated, (req, res) => res.render("login"));

// Register Page
router.get("/register", forwardAuthenticated, (req, res) =>
  res.render("register")
);

// Register
router.post("/register", async (req, res) => {
  const { name, email, password, password2 } = req.body;
  let errors = [];

  // Validation checks
  if (!name || !email || !password || !password2) {
    errors.push({ msg: "Please enter all fields" });
  }

  if (password !== password2) {
    errors.push({ msg: "Passwords do not match" });
  }

  if (password.length < 6) {
    errors.push({ msg: "Password must be at least 6 characters" });
  }

  if (errors.length > 0) {
    return res.render("register", {
      errors,
      name,
      email,
      password,
      password2,
    });
  }

  try {
    // Check if user already exists
    const user = await User.findOne({ email: email });
    if (user) {
      errors.push({ msg: "Email already exists" });
      return res.render("register", {
        errors,
        name,
        email,
        password,
        password2,
      });
    }

    // Create new user
    const newUser = new User({
      name,
      email,
      password,
    });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);

    // Save user to the database
    await newUser.save();
    req.flash("success_msg", "You are now registered and can log in");
    res.redirect("/users/login");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Login
router.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/users/login",
    failureFlash: true,
  })(req, res, next);
});

// Logout
router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success_msg", "You are logged out");
    res.redirect("/users/login");
  });
});

module.exports = router;
