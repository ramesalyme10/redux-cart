import express from "express";
import expressHandler from "express-async-handler";
import Products from "../Model/productsModel.js";
import generateToken from "../utils/generateToken.js";
import { protect } from "../MiddleWare/authMiddleWare.js";
import multer from "multer";
import path from "path";

const router = express.Router();

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

// get Products
router.get(
  "/all",
  //   protect,
  expressHandler(async (req, res) => {
    try {
      const products = await Products.find();
      res.status(200).json(products);
    } catch (error) {
      throw new Error("invalid No Products Found");
    }
  })
);

// Create Products
router.post(
  "/",
  upload.single("gallery"),

  expressHandler(async (req, res) => {
      const { name, image, description, price, rating, category } = req.body;
      const imageName = req.file.filename 
      const productsExist = await Products.findOne({ image: imageName });
      if (productsExist) {
          throw new Error("Products is Already Exist");
        }
    if (!name && !image && !description && !price && !rating && !category) {
      res.status(400);
      throw new Error("Please Fill Your Products");
    } else {
      const product = await Products.create({
        name,
        image:imageName,
        description,
        price,
        rating,
        category,
      });
      const products = await product.save();
      if (products) {
        res.status(200).json({
          _id: products._id,
          name: products.name,
          image: products.imageName,
          description: products.description,
          price: products.price,
          rating: products.rating,
          category: products.category,
          token: generateToken(products._id),
        });
      }
    }
  })
);


// Delete Products

router.delete(
  "/delete/:id",
  expressHandler(async (req, res) => {
    try {
      const products = await Products.findById(req.params.id);
      const deleteProducts = await Products.findByIdAndDelete(products);
      res.status(200).json(deleteProducts);
    } catch (error) {
      throw new Error("No Products  ID ");
    }
  })
);

// details Products

router.get(
  "/details/:id",
  expressHandler(async (req, res) => {
    try {
      const products = await Products.findById(req.params.id);

      res.status(200).json(products);
    } catch (error) {
      throw new Error("Invalid No Products");
    }
  })
);

export default router;
