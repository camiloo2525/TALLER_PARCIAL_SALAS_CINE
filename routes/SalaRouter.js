const express = require('express');
const router = express.Router();
const salaCrud = require('../CRUD/salaCrud');

router.post('/', salaCrud.createSala);
router.get('/', salaCrud.getSalas);
router.get('/:id', salaCrud.getSala);
router.put('/:id', salaCrud.updateSala);
router.delete('/:id', salaCrud.deleteSala);

module.exports = router;