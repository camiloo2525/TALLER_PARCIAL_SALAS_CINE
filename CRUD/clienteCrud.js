let clientes = [];
let ClienteId = 1;

exports.createCliente = (req, res) => {
  const { nombre, apellido, correoElectronico } = req.body;
  const id = ClienteId++;
  const nuevoCliente = { id, nombre, apellido, correoElectronico };
  clientes.push(nuevoCliente);
  res.status(201).json(nuevoCliente);
};

exports.getClientes = (req, res) => {
  res.status(200).json(clientes);
};

exports.getCliente = (req, res) => {
  const cliente = clientes.find(c => c.id === parseInt(req.params.id));
  if (cliente) {
    res.status(200).json(cliente);
  } else {
    res.status(404).json({ message: 'Cliente no encontrado' });
  }
};

exports.updateCliente = (req, res) => {
  const cliente = clientes.find(c => c.id === parseInt(req.params.id));
  if (cliente) {
    const { nombre, apellido, correoElectronico } = req.body;
    cliente.nombre = nombre;
    cliente.apellido = apellido;
    cliente.correoElectronico = correoElectronico;
    res.status(200).json(cliente);
  } else {
    res.status(404).json({ message: 'Cliente no encontrado' });
  }
};

exports.deleteCliente = (req, res) => {
  clientes = clientes.filter(c => c.id !== parseInt(req.params.id));
  res.status(204).json();
};