var express = require('express');
var router = express.Router();

const upload = require("../lib/upload")

const PizzasController = require('../controllers/PizzasController');
const verifyLoggedUser = require('../middlewares/verifyLoggedUser')

/* GET home page. */
router.get('/', PizzasController.index);
router.get('/busca', PizzasController.search);
router.get('/pizzas/:id/edit', PizzasController.edit);
router.get('/pizzas/create', verifyLoggedUser, PizzasController.create);
router.get('/pizzas/:id', PizzasController.show);
router.get('/pizzas', verifyLoggedUser, PizzasController.list);
router.post('/pizzas', upload.single("img"),PizzasController.store);
router.put('/pizzas/:id/update', upload.single("img"), PizzasController.update);
router.delete('/pizzas/:id', PizzasController.delete);

module.exports = router;
