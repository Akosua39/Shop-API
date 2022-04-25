const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  // getting token from the headers
  const tokenwithBearer = req.headers.authorization;

  //   if there is no token return error to the user
  if (!tokenwithBearer) {
    return res.status(403).json({ error: "User not authenticated" });
  }
  const token = tokenwithBearer.split(" ")[1];

  try {
    // verify if the token is correct
    const user = jwt.verify(token, "secret");

    // attach the user to the req
    req.user = user;
  } catch (error) {
    return res.status(403).json({ error: "User not authenticated" });
  }

  console.log(token);
  next();
};

module.exports = {
  verifyToken,
};
