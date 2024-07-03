import Entrenador from "../models/entrenador.model.js"

// Create Entrenador
export const createEntrenador = async (req, res) => {
    const {
        nombre,
        grado,
        gimnasio
    } = req.body;
    try {
        const newEntrenador = new Entrenador({
            nombre,
            grado,
            gimnasio,
        });
        const saveEntrenador = await newEntrenador.save();
        const rback = await Entrenador.find();
        res.send(rback);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al crear el entrenador');
    }
};

// Read Entrenador
export const readEntrenador = async (req, res) => {
    try {
        const entrenadores = await Entrenador.find();
        res.send(entrenadores);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al leer los entrenadores');
    }
};

// Update Entrenador
export const updateEntrenador = async (req, res) => {
    const { nombre } = req.body;
    const {
        grado,
        gimnasio
    } = req.body;
    try {
        const updatedEntrenador = await Entrenador.findOneAndUpdate(
            { nombre: nombre }, // Assuming "nombre" is a unique identifier
            {
                grado,
                gimnasio
            },
            { new: true }
        );
        if (!updatedEntrenador) {
            return res.status(404).send('Entrenador no encontrado');
        }
        const entrenadores = await Entrenador.find();
        res.send(entrenadores);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al actualizar el entrenador');
    }
};

// Delete Entrenador
export const deleteEntrenador = async (req, res) => {
    const { nombre } = req.body;
    try {
        const deletedEntrenador = await Entrenador.findOneAndDelete(
            { nombre: nombre } // Assuming "nombre" is a unique identifier
        );
        if (!deletedEntrenador) {
            return res.status(404).send('Entrenador no encontrado');
        }
        const entrenadores = await Entrenador.find();
        res.send(entrenadores);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al eliminar el entrenador');
    }
};
