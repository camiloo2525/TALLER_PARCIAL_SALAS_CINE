let filas = [];
let FilaId = 1;

exports.createFila = (req, res) => {
  const { numero_filas } = req.body;
  const id_fila = FilaId++;
  const nuevaFila = { id_fila, numero_filas };
  filas.push(nuevaFila);
  res.status(201).json(nuevaFila);
};

exports.getFilas = (req, res) => {
  res.status(200).json(filas);
};

exports.getFila = (req, res) => {
  const fila = filas.find(f => f.id_fila === parseInt(req.params.id));
  if (fila) {
    res.status(200).json(fila);
  } else {
    res.status(404).json({ message: 'Fila no encontrada' });
  }
};

exports.updateFila = (req, res) => {
  const { id } = req.params;
  const { numero_filas } = req.body;
  console.log(`actualizar: ${id}`); 
  let fila = filas.find(f => f.id_fila === parseInt(id));
  console.log(`actualizar: ${JSON.stringify(fila)}`); 
  if (fila) {
    fila.numero_filas = numero_filas;
    res.status(200).json(fila);
  } else {
    res.status(404).json({ message: 'Fila no encontrada' });
  }
};

exports.deleteFila = (req, res) => {
  const { id } = req.params;
  const initialLength = filas.length;
  filas = filas.filter(f => f.id_fila !== parseInt(id));
  if (filas.length < initialLength) {
    res.status(204).json();
  } else {
    res.status(404).json({ message: 'Fila no encontrada' });
  }
};