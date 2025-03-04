import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "Access Denied" });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    
    req.userId = verified.userId;

    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid Token" });
  }
};

export default authMiddleware;
