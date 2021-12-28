import express from "express";
import {
  getProducts
} from "../controllers/ProductController";

const router = express.Router();

router.get('/:categoryId', getProducts);

export default router;