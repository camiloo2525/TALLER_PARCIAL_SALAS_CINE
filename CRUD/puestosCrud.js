let puestos = [];
let PuestoId = 1;

exports.createPuesto = (req, res) => {
  const { id_fila, numero_puesto } = req.body;
  const id_puesto = PuestoId++;
  const nuevoPuesto = { id_puesto, id_fila, numero_puesto };
  puestos.push(nuevoPuesto);
  res.status(201).json(nuevoPuesto);
};

exports.getPuestos = (req, res) => {
  res.status(200).json(puestos);
};

exports.getPuesto = (req, res) => {
  const id_puesto = parseInt(req.params.id);
  const puesto = puestos.find(p => p.id_puesto === id_puesto);
  if (puesto) {
    res.status(200).json(puesto);
  } else {
    res.status(404).json({ message: 'Puesto no encontrado' });
  }
};

exports.updatePuesto = (req, res) => {
  const id_puesto = parseInt(req.params.id);
  const puesto = puestos.find(p => p.id_puesto === id_puesto);
  if (puesto) {
    const { id_fila, numero_puesto } = req.body;
    puesto.id_fila = id_fila;
    puesto.numero_puesto = numero_puesto;
    res.status(200).json(puesto);
  } else {
    res.status(404).json({ message: 'Puesto no encontrado' });
  }
};

exports.deletePuesto = (req, res) => {
    const id_puesto = parseInt(req.params.id);
    const initialLength = puestos.length;
    puestos = puestos.filter(p => p.id_puesto !== id_puesto);
    if (puestos.length < initialLength) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Puesto no encontrado' });
    }
  };
  