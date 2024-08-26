const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  // Check if cookies are present
  const token = req.cookies ? req.cookies.token : null;

  if (!token) {
    return res.status(401).json({ message: "You are not authenticated!" });
  }

  jwt.verify(token, process.env.SECRET, (err, data) => {
    if (err) {
      return res
        .status(403)
        .json({ message: "Token is not valid!", error: err.message });
    }

    req.userId = data._id; // Assuming the token contains the user's _id

    next();
  });
};

module.exports = verifyToken;
