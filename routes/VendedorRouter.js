const express = require('express');
const router = express.Router();
const vendedorCrud = require('../CRUD/vendedorCrud');

router.post('/', vendedorCrud.createVendedor);
router.get('/', vendedorCrud.getVendedores);
router.get('/:id', vendedorCrud.getVendedor);
router.put('/:id', vendedorCrud.updateVendedor);
router.delete('/:id', vendedorCrud.deleteVendedor);

module.exports = router;