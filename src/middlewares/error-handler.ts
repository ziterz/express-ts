import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

/**
 * Middleware to handle all uncaught errors.
 * The error is logged to `stderr` and a 500 Internal Server Error status is sent to the client.
 *
 * @param error - The error that was thrown.
 * @param _req - The Express request object (unused).
 * @param res - The Express response object used to return data and HTTP status codes to the client.
 * @param _next - The Express next function (unused).
 */
const errorHandler = (error: unknown, _req: Request, res: Response, _next: NextFunction): void => {
  console.error(error);
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
};

export default errorHandler;
