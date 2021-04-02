const User = require("../Model/User");
const asyncHandler = require("express-async-handler");

// to create an user
exports.createUser = asyncHandler(async (req, res) => {
  const { name, phoneNumber, email, classes, password } = req.body;
  try {
    const newUser = await User.create({
      name: name,
      phoneNumber:phoneNumber,
      email: email,
      classes:classes,
      password: password
    });
    if (newUser) {
      res.status(201).json({
        status: "Success",
        message: "User Registered!",
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "Error",
      err,
    });
  }
});

//Login
exports.userLogin = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  //validation email and password
  // if (!email || !password) {
  //   return next(new Error("Please enter email id and password", 400));
  // }
  //check for user
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    res.send("Invalid Email" , 401)
    // return next(new Error("Invalid credential", 401));
  }
  //check if password matchs
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    res.send("Invalid Password" , 401)
    // return next(new Error("Invalid password", 401));
  }
  //create token
  sendTokenResponse(user, 200, res);
});

//get token from model, create a cookie, send res
const sendTokenResponse = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 60 * 60 * 100
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") {
    options.secure = true;
  }

  res.status(statusCode).cookie("token", token, options, user).json({
    message: "Succesful",
    token,
    user,
  });
};