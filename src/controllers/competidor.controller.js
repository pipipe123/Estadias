import Competidor from "../models/competidor.model.js";

export const createCompetidor = async(req,res)=>{
    const{
        nombre,
        grado,
        anioNacimiento,
        peso,
        modalidad,
        entrenador,
        escuela, //se tendra que comprobar
    }=req.body
    try {
        const newCompetidor = new Competidor({
            nombre,
            grado,
            anioNacimiento,
            peso,
            modalidad,
            entrenador,
            escuela,
        })
        const saveCompetidor = await newCompetidor.save()
        const rback = await Competidor.find();
        res.send(rback);
    } catch (error) {
        console.log(error);
    }
}