let localidades = [];
let LocalidadId = 1;

exports.createLocalidad = (req, res) => {
  const { nombre_localidad, capacidad, precio, id_fila, id_sala } = req.body;
  const id_localidad = LocalidadId++;
  const nuevaLocalidad = { id_localidad, nombre_localidad, capacidad, precio, id_fila, id_sala };
  localidades.push(nuevaLocalidad);
  res.status(201).json(nuevaLocalidad);
};

exports.getLocalidades = (req, res) => {
  res.status(200).json(localidades);
};

exports.getLocalidad = (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`obtener: ${id}`); 
  const localidad = localidades.find(l => l.id_localidad === id);
  console.log(`obtener: ${localidad}`); 
  if (localidad) {
    res.status(200).json(localidad);
  } else {
    res.status(404).json({ message: 'Localidad no encontrada' });
  }
};

exports.updateLocalidad = (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`actualizar: ${id}`); 
  const localidad = localidades.find(l => l.id_localidad === id);
  console.log(`actualizar: ${localidad}`); 
  if (localidad) {
    const { nombre_localidad, capacidad, precio, id_fila, id_sala } = req.body;
    localidad.nombre_localidad = nombre_localidad;
    localidad.capacidad = capacidad;
    localidad.precio = precio;
    localidad.id_fila = id_fila;
    localidad.id_sala = id_sala;
    res.status(200).json(localidad);
  } else {
    res.status(404).json({ message: 'Localidad no encontrada' });
  }
};

exports.deleteLocalidad = (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`borrar: ${id}`); 
  localidades = localidades.filter(l => l.id_localidad !== id);
  res.status(204).json();
};

