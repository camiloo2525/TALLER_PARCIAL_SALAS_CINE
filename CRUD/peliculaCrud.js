let peliculas = [];

exports.createPelicula = (req , res) => {
    const { nombre , duracion , genero } = req.body;
    const id = peliculas.length + 1;
    const nuevaPelicula = {id, nombre, duracion, genero};
    peliculas.push(nuevaPelicula);
    res.status(201).json(nuevaPelicula);
};

exports.getPeliculas = (req, res) => {
    res.status(200).json(peliculas);
};

exports.getPelicula = (req, res) => {
    const pelicula = peliculas.find(p => p.id === parseInt(req.params.id));
    if (pelicula) {
     res.status(200).json(pelicula);
    } else {
     res.status(404).json({ message: 'Pelicula no encontrada'});
    }
};

exports.updatePelicula = (req, res) => {
    const pelicula = peliculas.find(p => p.id === parseInt(req.params.id));
    if (pelicula) {
      const { nombre, duracion, genero } = req.body;
      pelicula.nombre = nombre;
      pelicula.duracion = duracion;
      pelicula.genero = genero;
      res.status(200).json(pelicula);
    } else {
      res.status(404).json({ message: 'Pelicula no encontrada' });
    }
};

exports.deletePelicula = (req, res) => {
    peliculas = peliculas.filter(p => p.id !== parseInt(req.params.id));
    res.status(204).json();
};