let vendedores = [];
let VendedorId = 1;

exports.createVendedor = (req, res) => {
  const { nombre, apellido, identificacion } = req.body;
  const id = VendedorId++;
  const nuevoVendedor = { id, nombre, apellido, identificacion };
  vendedores.push(nuevoVendedor);
  res.status(201).json(nuevoVendedor);
};

exports.getVendedores = (req, res) => {
  res.status(200).json(vendedores);
};

exports.getVendedor = (req, res) => {
  const vendedor = vendedores.find(v => v.id === parseInt(req.params.id));
  if (vendedor) {
    res.status(200).json(vendedor);
  } else {
    res.status(404).json({ message: 'Vendedor no encontrado' });
  }
};

exports.updateVendedor = (req, res) => {
  const vendedor = vendedores.find(v => v.id === parseInt(req.params.id));
  if (vendedor) {
    const { nombre, apellido, identificacion } = req.body;
    vendedor.nombre = nombre;
    vendedor.apellido = apellido;
    vendedor.identificacion = identificacion;
    res.status(200).json(vendedor);
  } else {
    res.status(404).json({ message: 'Vendedor no encontrado' });
  }
};

exports.deleteVendedor = (req, res) => {
  vendedores = vendedores.filter(v => v.id !== parseInt(req.params.id));
  res.status(204).json();
};