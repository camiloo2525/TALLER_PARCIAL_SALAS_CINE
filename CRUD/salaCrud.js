let salas = [];

exports.createSala = (req , res) => {
  const { nombre , capacidad } = req.body;
  const id = salas.length + 1;
  const nuevaSala = {id, nombre, capacidad};
  salas.push(nuevaSala);
  res.status(201).json(nuevaSala);
};

exports.getSalas = (req, res) => {
  res.status(200).json(salas);
};

exports.getSala = (req, res) => {
  const sala = salas.find(s => s.id === parseInt(req.params.id));
  if (sala) {
    res.status(200).json(sala);
  } else {
    res.status(404).json({ message: 'sala no encontrada'});
  }
};


exports.updateSala = (req, res) => {
  const sala = salas.find(s => s.id === parseInt(req.params.id));
  if (sala){
    const { nombre, capacidad } = req.body;
    sala.nombre = nombre;
    sala.capacidad = capacidad;
    res.status(200).json(sala);
  }else{
    res.status(404).json({ message: 'sala no actualizada'});
  }
};

exports.deleteSala = (req, res) => {
  salas = salas.filter(s => s.id !== parseInt(req.params.id));
  res.status(204).json();
};