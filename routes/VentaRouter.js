const express = require('express');
const router = express.Router();
const ventasCrud = require('../CRUD/ventasCrud');

router.post('/', ventasCrud.createVenta);
router.get('/', ventasCrud.getVentas);
router.get('/:id', ventasCrud.getVenta);
router.put('/:id', ventasCrud.updateVenta);
router.delete('/:id', ventasCrud.deleteVenta);

module.exports = router;