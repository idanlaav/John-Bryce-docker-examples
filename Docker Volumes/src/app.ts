import { RouteNotFoundError } from './4-models/error-models';
import express, { NextFunction, Request, Response } from "express";
import expressFileUpload from "express-fileupload";
import logger from "./2-utils/logger";
import catchAll from "./3-middleware/catch-all";
import kittensController from "./6-controllers/kittens-controller";

const server = express();

server.use(expressFileUpload());
server.use("/api", kittensController);
server.use("*", (request: Request, response: Response, next: NextFunction) => next(new RouteNotFoundError(request.method, request.originalUrl)));
server.use(catchAll);

server.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
    logger.logActivity("Server started...");
});
