import bodyParser from 'body-parser';
import express from 'express';

import productsRouter from './routes/products';

const app = express();

app.use(bodyParser.json());

app.use('/organic', productsRouter);

app.listen(8080);

