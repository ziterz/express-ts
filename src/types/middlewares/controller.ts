import { Request, Response } from 'express';

/**
 * Represents a controller function that handles an HTTP request.
 * @param req - The Express request object, providing request information.
 * @param res - The Express response object, used to send responses back to the client.
 */
type Controller = (req: Request, res: Response) => Promise<void>;

export default Controller;
