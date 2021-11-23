import Koa from 'koa';
import api from './api';
import Router from 'koa-router';
import mongoose from 'mongoose';
import bodyParser from 'koa-bodyparser';
import { config } from 'dotenv';
import jwtMiddleware from './lib/jwtMiddleware';

config()

const app = new Koa();
const router = new Router();

const { PORT } = process.env;
const MONGO_URL = String(process.env.MONGO_URL);

router.use('/api', api.routes());

app.use(bodyParser());
app.use(jwtMiddleware);
app.use(router.routes()).use(router.allowedMethods());

mongoose.connect(MONGO_URL)
  .then(() => {
    console.log('Connect to MongoDB');
  })
  .catch((e) => {
    console.log(e);
  })

const port = PORT || 4000;
app.listen(port, () => {
  console.log('listening to port %d', port);
})