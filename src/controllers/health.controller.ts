import { StatusCodes } from 'http-status-codes';
import SyncMiddleware from '@/types/middlewares/sync';

/**
 * Responds to a health check request with a 200 OK status.
 * @param _req - The Express request object (unused).
 * @param res - The Express response object.
 * @param _next - The Express next function (unused).
 */
const health: SyncMiddleware = (_req, res, _next) => {
  res.status(StatusCodes.OK).send();
};

export default health;
