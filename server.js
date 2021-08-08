const Koa = require('koa');
const koaBody = require('koa-body');
const logger = require('./winstonConfig');
const productoRouter = require('./routes/productoRouter');
const env = require('./config');

const app = new Koa();

app.use(koaBody());

app.use(productoRouter.routes());

const PORT = env.PORT || 8080;

const server = app.listen(PORT, () => {
	logger.info(`El servidor esta corriendo en el puerto: ${server.address().port}`);
});

server.on('error', (err) => {
	logger.info(`Error de servidor: ${err}`);
	logger.error(`Error de servidor: ${err}`);
});
