import Router from 'koa-router';
import * as writeCtrl from './write.ctrl';

const writes = new Router();

writes.get('/', writeCtrl.list);
writes.post('/', writeCtrl.write);
writes.delete('/:id', writeCtrl.getPostById ,writeCtrl.remove);

export default writes;