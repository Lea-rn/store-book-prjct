const User = require("../models/userModel");

////// register ::

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = new User({
      name,
      email,
      password,
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
  }
};
