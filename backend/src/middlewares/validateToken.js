const JWT = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) throw new Error("401 | Lost Authorization");

    const secret = process.env.API_SECRET;
    const payload = JWT.verify(authorization, secret);

    const { id } = payload;

    if (!id) throw new Error("500 | Invalid token payload!");

    req.userId = id;

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = validateToken;