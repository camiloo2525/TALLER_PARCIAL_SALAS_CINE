const express = require('express');
const router = express.Router();
const localidadCrud = require('../CRUD/localidadCrud');

router.post('/', localidadCrud.createLocalidad);
router.get('/', localidadCrud.getLocalidades);
router.get('/:id', localidadCrud.getLocalidad);
router.put('/:id', localidadCrud.updateLocalidad);
router.delete('/:id', localidadCrud.deleteLocalidad);

module.exports = router;