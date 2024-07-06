let ventas = [];
let VentaId = 1;


exports.createVenta = (req, res) => {
  const { id_funcion, id_puesto, id_vendedor, id_cliente } = req.body;
  const nuevaVenta = { id_venta: VentaId++, id_funcion, id_puesto, id_vendedor, id_cliente };
  ventas.push(nuevaVenta);
  res.status(201).json(nuevaVenta);
};


exports.getVentas = (req, res) => {
  res.status(200).json(ventas);
};

exports.getVenta = (req, res) => {
  const id_venta = parseInt(req.params.id);
  const venta = ventas.find(v => v.id_venta === id_venta);
  if (venta) {
    res.status(200).json(venta);
  } else {
    res.status(404).json({ message: 'Venta no encontrada' });
  }
};


exports.updateVenta = (req, res) => {
  const id_venta = parseInt(req.params.id);
  const venta = ventas.find(v => v.id_venta === id_venta);
  if (venta) {
    const { id_funcion, id_puesto, id_vendedor, id_cliente } = req.body;
    venta.id_funcion = id_funcion;
    venta.id_puesto = id_puesto;
    venta.id_vendedor = id_vendedor;
    venta.id_cliente = id_cliente;
    res.status(200).json(venta);
  } else {
    res.status(404).json({ message: 'Venta no encontrada' });
  }
};


exports.deleteVenta = (req, res) => {
    const id_venta = parseInt(req.params.id);
    const ventasInicial = ventas.length;
    ventas = ventas.filter(v => v.id_venta !== id_venta);
    if (ventas.length < ventasInicial) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Venta no encontrada' });
    }
};
