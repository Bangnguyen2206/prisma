import jwt from "jsonwebtoken";

function verify(req, res, next) {
  const token = req.header("Authorization");
  if (!token) return res.status(401).send("Access denied");
  try {
    const verified = jwt.verify(token, process.env.SECRET_TOKEN);
    req.user = verified;
    next();
  } catch (error) {
    return res.status(400).send("Invalid token!");
  }
}
export default verify;
