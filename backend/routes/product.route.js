import express from "express";
import {
  createProduct,
  deletedProduct,
  getAllProducts,
  getProductById,
  updateProductById,
} from "../controllers/product.controller.js";

const productRouter = express.Router();

productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProductById);
productRouter.post("/", createProduct);
productRouter.put("/:id", updateProductById);
productRouter.delete("/:id", deletedProduct);

export default productRouter;
