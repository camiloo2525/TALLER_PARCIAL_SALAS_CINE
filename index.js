const express = require('express');

const PeliculaRouter = require('./routes/PeliculaRouter');
const SalaRouter = require('./routes/SalaRouter');
const FuncionRouter = require('./routes/FuncionRouter');
const LocalidadRouter = require('./routes/LocalidadRouter');
const FilaRouter = require('./routes/FilaRouter');
const PuestoRouter = require('./routes/PuestoRouter');
const VentaRouter = require('./routes/VentaRouter');
const ClienteRouter = require('./routes/ClienteRouter');
const VendedorRouter = require('./routes/VendedorRouter');
const CineRouter = require('./routes/CineRouter');

const app = express();
app.use(express.json());

app.use('/peliculas', PeliculaRouter);
app.use('/salas', SalaRouter);
app.use('/funciones', FuncionRouter);
app.use('/localidades' , LocalidadRouter)
app.use('/filas', FilaRouter);
app.use('/puestos', PuestoRouter);
app.use('/ventas', VentaRouter);
app.use('/clientes', ClienteRouter);
app.use('/vendedores', VendedorRouter);
app.use('/cine' , CineRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ejemplo de una app corriendo en  http://localhost:${PORT}`);
});