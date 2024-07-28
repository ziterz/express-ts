import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import SyncMiddleware from '../types/middlewares/sync';
import { ZodSchema } from 'zod';

/**
 * Creates a middleware that validates a request against a Zod schema.
 *
 * @param schema - The Zod schema to validate the request against.
 * @returns A middleware that validates the request against the schema.
 */
const createValidator =
  <T>(schema: ZodSchema<T>): SyncMiddleware =>
  (req: Request, res: Response, next: NextFunction): void => {
    /** Result of parsing the request against the schema. */
    const result = schema.safeParse(req);
    if (!result.success) {
      res.status(StatusCodes.BAD_REQUEST).send();
      return;
    }

    next();
  };

export default createValidator;
