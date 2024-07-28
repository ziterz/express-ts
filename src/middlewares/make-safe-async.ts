import AsyncMiddleware from '@/types/middlewares/async';
import Controller from '@/types/middlewares/controller';

/**
 * Wraps an async Middleware so that any errors thrown are caught and passed to the Express error handler.
 *
 * @param middleware - The middleware to wrap.
 * @returns The wrapped middleware.
 */
const makeSafeAsync = (middleware: AsyncMiddleware | Controller): AsyncMiddleware => {
  return async (req, res, next) => {
    try {
      await middleware(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

export default makeSafeAsync;
