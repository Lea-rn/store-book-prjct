const User = require("../models/userModel");
const bcrypt = require("bcrypt");

/////// 0 ; "" ; undefined ; false ; null; NaN

////// register ::

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  ///// check email if exist ::
  const existUser = await User.findOne({ email });
  console.log(existUser);

  if (existUser) {
    req.flash("error-msg", "Email already exists !!");
    return res.redirect("/register");
  }

  ///// hash password (cryptage du mot de passe)
  const haschedPassword = await bcrypt.hash(password, 8);

  try {
    const newUser = new User({
      name,
      email,
      password: haschedPassword,
    });

    await newUser.save();
    console.log("register successfull");
    res.redirect("/login");
  } catch (err) {
    console.log(err);
  }
};

///// login ::

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    //// check user :
    const result = await User.findOne({ email });
    if (!result) {
      req.flash("error-msg", "wrong email or password !!");
      return res.redirect("/login");
    }

    ///// compare password

    const isMatch = await bcrypt.compare(password, result.password); /// boolean ..
    console.log(isMatch);
    if (!isMatch) {
      req.flash("error-msg", "wrong email or password !!");
      return res.redirect("/login");
    }
    console.log("login with success !!");
    req.session.user = result;
    res.redirect("/ourbooks");
  } catch (err) {
    console.log(err);
  }
};
