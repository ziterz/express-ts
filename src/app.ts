import dotenv from 'dotenv';
import express, { Application } from 'express';
import cors from 'cors';
import rootRouter from './routes';
import morgan from 'morgan';
import errorHandler from './middlewares/error-handler';
import connectDB from './config/db.config';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

/**
 * Builds the Express application instance to be used as the server.
 * @param attachLogger - Whether to attach a logger (Morgan) to the Express application.
 * This should be set to `true` in production to log requests and responses.
 * Set this to `false` in integration tests to prevent logging from cluttering the test output.
 * @returns - The built Express application instance.
 */
const buildApp = (attachLogger: boolean): Application => {
  /** The built Express application instance. */
  const app: Application = express();

  connectDB(process.env.MONGODB_URI).catch(console.error);

  const corsOptions = {
    origin: ['http://localhost:5173'],
    headers: ['Content-Type'],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
  };

  app.use(cors(corsOptions));

  if (attachLogger) {
    app.use(morgan('combined'));
  }

  app.use(express.json());
  app.use('/v1', rootRouter);
  app.use(errorHandler);

  return app;
};

export default buildApp;
