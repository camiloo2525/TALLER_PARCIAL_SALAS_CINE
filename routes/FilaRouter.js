const express = require('express');
const router = express.Router();
const filaCrud = require('../CRUD/filaCrud');

router.post('/', filaCrud.createFila);
router.get('/', filaCrud.getFilas);
router.get('/:id', filaCrud.getFila);
router.put('/:id', filaCrud.updateFila);
router.delete('/:id', filaCrud.deleteFila);

module.exports = router;
