import Router from 'koa-router';
import writes from './write';

const api = new Router();

api.use('/write', writes.routes());

export default api;