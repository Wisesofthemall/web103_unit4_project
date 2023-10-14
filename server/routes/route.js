import express from "express";
import GiftsController from "../controllers/gift.js";

const router = express.Router();

router.get("/", GiftsController.getCars);

router.get("/:id", GiftsController.getCarsById);

router.put("/car/:id", GiftsController.editCarById);

export default router;
