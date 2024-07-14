import jwt from "jsonwebtoken";
import expressAsyncHandler from "express-async-handler";
import Products from "../Model/productsModel.js";

const protect = expressAsyncHandler(async (req, res, next) => {
  let token;
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    )
      token = req.headers.authorization.split(" ")[1];
    let detected = jwt.verify(token, process.env.JWT_KEY);
    req.product = await Products.findById(detected.id);
    next();
  } catch (error) {
    res.status(401);
    throw new Error("No Authorized & No Invalid");
  }
  if (!token) {
    res.status(401);
    throw new Error("No Authorized & No token");
  }
});

export { protect };
