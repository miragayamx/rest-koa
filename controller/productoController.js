const productosDAO = require('../models/DAO/productoDAO');

const getList = async ({ request, response }, next) => {
	try {
		let productos;
		const id = request.query.id;
		if (!!id) {
			productos = await productosDAO.findById(id);
		} else {
			productos = await productosDAO.find();
		}
		response.status = 200;
		response.body = productos;
	} catch (err) {
		response.status = 404;
		response.body = { error: err.message };
	}
	next();
};

const addItem = async ({ request, response }, next) => {
	try {
		const producto = request.body;
		producto.timestamp = Date.now();
		await productosDAO.insert(producto);
		response.status = 200;
		response.body = { notification: 'Operación realizada con exito!' };
	} catch (err) {
		response.status = 400;
		response.body = { error: err.message };
	}
	next();
};

const updateItem = async ({ request, response }, next) => {
	try {
		const id = request.params.id;
		const producto = request.body;
		await productosDAO.update(id, producto);
		response.status = 200;
		response.body = { notification: 'Operación realizada con exito!' };
	} catch (err) {
		response.status = 400;
		response.body = { error: err.message };
	}
	next();
};

const deleteItem = async ({ request, response }, next) => {
	try {
		await productosDAO.delete(request.params.id);
		response.status = 200;
		response.body = { notification: 'Operación realizada con exito!' };
	} catch (err) {
		response.status = 400;
		response.body = { error: err.message };
	}
};

module.exports = {
	getList,
	addItem,
	updateItem,
	deleteItem
};
