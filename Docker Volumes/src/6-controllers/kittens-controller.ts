import express, { NextFunction, Request, Response } from "express";
import logger from "../2-utils/logger";
import logic from "../5-logic/kittens-logic";
import KittenModel from "../4-models/kitten-model";

const router = express.Router();

router.get("/kittens", async (request: Request, response: Response, next: NextFunction) => {
    try {
        logger.logActivity("Returning all kittens...");
        const kittens = await logic.getAllKittens();
        response.json(kittens);
    }
    catch (err: any) {
        next(err);
    }
});

router.post("/kittens", async (request: Request, response: Response, next: NextFunction) => {
    try {
        logger.logActivity("Adding a new kittens...");
        request.body.image = request.files.image;
        const kitten = new KittenModel(request.body);
        const addedKitten = await logic.addKitten(kitten);
        response.status(201).json(addedKitten);
    }
    catch (err: any) {
        next(err);
    }
});

router.get("/kittens/images/:imageName", async (request: Request, response: Response, next: NextFunction) => {
    try {
        logger.logActivity("Returning kitten image...");
        const imageName = request.params.imageName;
        const imagePath = logic.getImagePath(imageName);
        response.sendFile(imagePath);
    }
    catch (err: any) {
        next(err);
    }
});

export default router;