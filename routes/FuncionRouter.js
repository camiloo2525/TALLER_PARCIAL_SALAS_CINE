const express = require('express');
const router = express.Router();
const funcionCrud = require('../CRUD/funcionCrud');

router.post('/', funcionCrud.createFuncion);
router.get('/', funcionCrud.getFunciones);
router.get('/:id', funcionCrud.getFuncion);
router.put('/:id', funcionCrud.updateFuncion);
router.delete('/:id', funcionCrud.deleteFuncion);

module.exports = router;