const user = require("../model/user");

const register = (req, res) => {
  console.log("register");
  const { name, email, password } = req.body;
  if (!name) {
    res.status(400).json({ message: "name not found" });
  }
  if (!email || !email.includes("@")) {
    res.status(400).json({ message: "email not found" });
  }
  try {
    const user = user.find({ email: email });
    if (user) {
      res.status(400).json({ message: "Email is not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const login = (req, res) => {
  // const { email, password } = req.body;
  // if (!email) {
  //   res.staus(400).json({ message: "email notfound" });
  // }
  // try {
  //   const user = user.find({ email: email });
  //   if (user) {
  //     res.status(400).json({ message: "Email is" });
  //   }
  // } catch (error) {
  //   res.status(500).json({ message: error });
  // }
};

module.exports = { register, login };
