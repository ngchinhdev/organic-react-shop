import express, { NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import productsRouter from './routes/products';
import categoriesRouter from './routes/categories';
import createHttpError, { isHttpError } from 'http-errors';

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/api/products', productsRouter);
app.use('/api/categories', categoriesRouter);

app.use((req, res, next) => {
    next(createHttpError(404, 'Endpoint not found!'));
});

app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    let errorMessage = 'An unknown error occurred';
    let statusCode = 500;
    if (isHttpError(err)) {
        statusCode = err.status;
        errorMessage = err.message;
    };
    res.status(statusCode).json({ error: errorMessage });
});
export default app;