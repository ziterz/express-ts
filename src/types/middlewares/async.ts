import { Request, Response, NextFunction } from 'express';

/**
 * Defines the signature for an asynchronous Express middleware function.
 * @param req - The Express request object, providing request information.
 * @param res - The Express response object, used to send responses back to the client.
 * @param next - A function to signal Express to move to the next middleware in the pipeline.
 */
type AsyncMiddleware = (req: Request, res: Response, next: NextFunction) => Promise<void>;

export default AsyncMiddleware;
