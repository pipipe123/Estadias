import Competidor from "../models/competidor.model.js";
import Entrenador from "../models/entrenador.model.js";
import Gimnasio from "../models/gimnasio.model.js";
import Escuela from "../models/escuela.model.js";
// Create Competidor
// Crear un nuevo competidor
export const createCompetidor = async (req, res) => {
    const {
        nombre,
        grado,
        anioNacimiento,
        peso,
        modalidad,
        entrenador,
        gimnasio,
        escuela
    } = req.body;

    try {
        // Validar si el entrenador existe
        const entrenadorExistente = await Entrenador.findOne({ nombre: entrenador });
        if (!entrenadorExistente) {
            return res.status(404).send('Entrenador no encontrado');
        }

        // Validar si el gimnasio existe
        const gimnasioExistente = await Gimnasio.findOne({ nombre: gimnasio });
        if (!gimnasioExistente) {
            return res.status(404).send('Gimnasio no encontrado');
        }

        // Validar si la escuela existe
        const escuelaExistente = await Escuela.findOne({ nombre: escuela });
        if (!escuelaExistente) {
            return res.status(404).send('Escuela no encontrada');
        }

        // Calcular la categoría basada en el año de nacimiento
        const edad = new Date().getFullYear() - anioNacimiento;
        let categoria;

        switch (true) {
            case (edad >= 9 && edad <= 11):
                categoria = 'Infantil';
                break;
            case (edad >= 12 && edad <= 14):
                categoria = 'Cadetes';
                break;
            case (edad >= 15 && edad <= 17):
                categoria = 'Junior';
                break;
            case (edad >= 18 && edad <= 30):
                categoria = 'Senior 1';
                break;
            case (edad >= 31 && edad <= 40):
                categoria = 'Senior 2';
                break;
            default:
                return res.status(400).send('Edad fuera de rango para categorías definidas');
        }

        const newCompetidor = new Competidor({
            nombre,
            grado,
            anioNacimiento,
            peso,
            modalidad,
            entrenador,
            gimnasio,
            escuela,
            categoria // Añadimos la categoría al modelo
        });

        const saveCompetidor = await newCompetidor.save();
        const rback = await Competidor.find();
        res.status(201).send(rback);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al crear el competidor');
    }
};

// Read Competidor
export const readCompetidor = async (req, res) => {
    try {
        const competidores = await Competidor.find();
        res.status(200).send(competidores);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al leer los competidores');
    }
};

// Buscar un competidor por nombre
export const readCompetidorxNombre = async (req, res) => {
    const { nombre } = req.params;
    try {
        const competidor = await Competidor.findOne({ nombre });
        if (!competidor) {
            return res.status(404).send('Competidor no encontrado');
        }
        res.status(200).send(competidor);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al buscar el competidor');
    }
};

// Update Competidor
export const updateCompetidor = async (req, res) => {
    const { nombre } = req.body;
    const {
        grado,
        anioNacimiento,
        peso,
        modalidad,
        entrenador,
        gimnasio
    } = req.body;
    try {
        const updatedCompetidor = await Competidor.findOneAndUpdate(
            { nombre: nombre }, // Assuming "nombre" is a unique identifier
            { grado, anioNacimiento, peso, modalidad, entrenador, gimnasio },
            { new: true }
        );
        if (!updatedCompetidor) {
            return res.status(404).send('Competidor no encontrado');
        }
        const competidores = await Competidor.find();
        res.status(200).send(competidores);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al actualizar el competidor');
    }
};

// Delete Competidor
export const deleteCompetidor = async (req, res) => {
    const { nombre } = req.body;
    try {
        const deletedCompetidor = await Competidor.findOneAndDelete({ nombre: nombre });
        if (!deletedCompetidor) {
            return res.status(404).send('Competidor no encontrado');
        }
        const competidores = await Competidor.find();
        res.status(200).send(competidores);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al eliminar el competidor');
    }
};
