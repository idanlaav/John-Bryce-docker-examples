import { NextFunction, Request, Response } from "express";
import logger from "../2-utils/logger";

function catchAll(err: any, request: Request, response: Response, next: NextFunction): void {
    logger.logError(err.message);
    response.status((err as any).status || 500).send(err.message);
}

export default catchAll;
