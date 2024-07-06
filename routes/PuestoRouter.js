const express = require('express');
const router = express.Router();
const puestosCrud = require('../CRUD/puestosCrud');

router.post('/', puestosCrud.createPuesto);
router.get('/', puestosCrud.getPuestos);
router.get('/:id', puestosCrud.getPuesto);
router.put('/:id', puestosCrud.updatePuesto);
router.delete('/:id', puestosCrud.deletePuesto);

module.exports = router;