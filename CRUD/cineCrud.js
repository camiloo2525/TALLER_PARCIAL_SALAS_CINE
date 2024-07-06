let cines = [];
let CineId = 1;

exports.createCine = (req, res) => {
  const { nombre_cine } = req.body;
  const id = CineId++;
  const nuevoCine = { id, nombre_cine };
  cines.push(nuevoCine);
  res.status(201).json(nuevoCine);
};

exports.getCines = (req, res) => {
  res.status(200).json(cines);
};

exports.getCine = (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`obtener: ${id}`);
  const cine = cines.find(c => c.id === id);
  if (cine) {
    res.status(200).json(cine);
  } else {
    res.status(404).json({ message: 'Cine no encontrado' });
  }
};

exports.updateCine = (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`actualizar: ${id}`);
  console.log('cine:', cines); 
  const cine = cines.find(c => c.id === id);
  if (cine) {
    const { nombre_cine } = req.body;
    cine.nombre_cine = nombre_cine;
    res.status(200).json(cine);
  } else {
    res.status(404).json({ message: 'Cine no encontrado' });
  }
};

exports.deleteCine = (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`borrar: ${id}`);
  const initialLength = cines.length;
  cines = cines.filter(c => c.id !== id);
  if (cines.length < initialLength) {
    res.status(204).json();
  } else {
    res.status(404).json({ message: 'Cine no encontrado' });
  }
};

