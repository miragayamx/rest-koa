const Router = require('koa-router');
const productoController = require('../controller/productoController');

const router = new Router({
    prefix: '/productos'
});

router.get('/', productoController.getList);

router.post('/', productoController.addItem);

router.put('/:id', productoController.updateItem);

router.delete('/:id', productoController.deleteItem);

module.exports = router;