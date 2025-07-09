import express from "express";

const productRouter = express.Router();



import { 
    createProduct, 
    deletedProduct, 
    getAllProducts, 
    getProductById, 
    updateProductById 
} from "../controllers/product.controller";


productRouter.get("/",  getAllProducts);


productRouter.get("/:id", getProductById);


productRouter.post("/", createProduct);

productRouter.put("/:id", updateProductById);

productRouter.delete("/:id", deletedProduct);

export default productRouter;