import express from "express";
import {
  getCategories
} from "../controllers/CategoryController.js";

const router = express.Router();

router.get('/', getCategories);

export default router;