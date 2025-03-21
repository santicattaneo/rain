import express from 'express';
import handleblars from 'express-handlebars';

import env from './config/config.js';
import { __dirname, __mainDirname } from './utils/utils.js';

import viewsRouter from './routes/views.router.js';
import hablemosRouter from './routes/hablemos.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/public`));

app.engine('handlebars', handleblars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

app.use('/', viewsRouter);
app.use('/api/hablemos', hablemosRouter);

app.listen(+env.port);