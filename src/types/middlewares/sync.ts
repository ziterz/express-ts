import { Request, Response, NextFunction } from 'express';
import { MongoClient } from 'mongodb';

/**
 * Defines the signature for a synchronous Express middleware function.
 * @param req - The Express request object, providing request information.
 * @param res - The Express response object, used to send responses back to the client.
 * @param next - A function to signal Express to move to the next middleware in the pipeline.
 */
type SyncMiddleware = (req: Request, res: Response, next: NextFunction) => void;

export default SyncMiddleware;
