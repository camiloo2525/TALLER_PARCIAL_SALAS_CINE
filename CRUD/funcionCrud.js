let funciones = [];
let FuncionId = 1;

exports.createFuncion = (req, res) => {
  const { id_pelicula, id_localidad, id_venta, fecha } = req.body;
  const id_funcion = FuncionId++;
  const nuevaFuncion = { id_funcion, id_pelicula, id_localidad, id_venta, fecha };
  funciones.push(nuevaFuncion);
  res.status(201).json(nuevaFuncion);
};

exports.getFunciones = (req, res) => {
  res.status(200).json(funciones);
};

exports.getFuncion = (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`obtener: ${id}`); 
  const funcion = funciones.find(f => f.id_funcion === id);
  if (funcion) {
    res.status(200).json(funcion);
  } else {
    res.status(404).json({ message: 'Función no encontrada' });
  }
};

exports.updateFuncion = (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`actualizar: ${id}`); 
  const funcion = funciones.find(f => f.id_funcion === id);
  if (funcion) {
    const { id_pelicula, id_localidad, id_venta, fecha } = req.body;
    funcion.id_pelicula = id_pelicula;
    funcion.id_localidad = id_localidad;
    funcion.id_venta = id_venta;
    funcion.fecha = fecha;
    res.status(200).json(funcion);
  } else {
    res.status(404).json({ message: 'Función no encontrada' });
  }
};

exports.deleteFuncion = (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`borrar: ${id}`); 
  funciones = funciones.filter(f => f.id_funcion !== id);
  res.status(204).json();
};

