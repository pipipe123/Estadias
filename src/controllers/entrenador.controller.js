import Entrenador from "../models/entrenador.model.js"

export const createEntrenador = async(req,res)=>{
    const{
        nombre,
        grado,
        escuela, //se tendra que comprobar
    }=req.body
    try {
        const newEntrenador = new Entrenador({
            nombre,
            grado,
            escuela,
        })
        const saveEntrenador = await newEntrenador.save()
        const rback = await Entrenador.find();
        res.send(rback);
    } catch (error) {
        console.log(error);
    }
}