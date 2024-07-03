import bcrypt from 'bcrypt';
import Usuario from "../models/usuario.model.js";

export const addUser = async (req, res) => {
    const { usuario, pass, escuela } = req.body;

    try {
        // Verificar si el usuario ya existe
        const usuarioExistente = await Usuario.findOne({ usuario });
        if (usuarioExistente) {
            return res.status(400).send('Usuario ya existe');
        }

        // Hash de la passseña
        const hashedPassword = await bcrypt.hash(pass, 10);

        const newUser = new Usuario({
            usuario,
            pass: hashedPassword,
            escuela
        });

        const saveUser = await newUser.save();
        res.status(201).send('Usuario creado exitosamente');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al crear el usuario');
    }
};


export const login = async (req, res) => {
    const { usuario, pass } = req.body;

    try {
        // Buscar usuario por usuario
        const usuarioExistente = await Usuario.findOne({ usuario });
        if (!usuarioExistente) {
            return res.status(404).send('Usuario no enpassdo');
        }
        if (!usuarioExistente.pass) {
            return res.status(500).send('Error en la base de datos: contraseña no encontrada');
        }
        // Verificar la passseña
        
        const validPassword = await bcrypt.compare(pass, usuarioExistente.pass);
        if (!validPassword) {
            return res.status(401).send('contraseña incorrecta');
        }

        // Iniciar sesión (aquí, simplemente establecemos una variable de sesión)
        req.session.userId = usuarioExistente._id;
        res.status(200).send('Inicio de sesión exitoso');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al iniciar sesión');
    }
};

export const logout = async (req, res) => {
    try {
        // Destruir la sesión
        req.session.destroy(err => {
            if (err) {
                return res.status(500).send('Error al cerrar sesión');
            }
            res.status(200).send('Sesión cerrada exitosamente');
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al cerrar sesión');
    }
};