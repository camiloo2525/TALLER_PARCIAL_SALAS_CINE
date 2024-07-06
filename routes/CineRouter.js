const express = require('express');
const router = express.Router();
const cineCrud = require('../CRUD/cineCrud');

router.post('/', cineCrud.createCine);
router.get('/', cineCrud.getCines);
router.get('/:id', cineCrud.getCine);
router.put('/:id', cineCrud.updateCine);
router.delete('/:id', cineCrud.deleteCine);

module.exports = router;
