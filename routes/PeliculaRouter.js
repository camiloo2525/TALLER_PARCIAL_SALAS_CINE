const express = require('express');
const router = express.Router();
const peliculaCrud = require('../CRUD/peliculaCrud');

router.post('/', peliculaCrud.createPelicula);
router.get('/', peliculaCrud.getPeliculas);
router.get('/:id', peliculaCrud.getPelicula);
router.put('/:id', peliculaCrud.updatePelicula);
router.delete('/:id', peliculaCrud.deletePelicula);

module.exports = router;