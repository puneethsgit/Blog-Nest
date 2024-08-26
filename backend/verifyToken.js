const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  // console.log(token)
  if (!token) {
    return res.status(401).json({ message: "You are not authenticated!" });
  }

  jwt.verify(token, process.env.SECRET, (err, data) => {
    if (err) {
      return res
        .status(403)
        .json({ message: "Token is not valid!", error: err.message });
    }

    req.userId = data._id;

    // console.log("passed")

    next();
  });
};

module.exports = verifyToken;
