import Evento from "../models/evento.model.js"
import generarCodigoAleatorio from "./operaciones.js"
export const createEvento = async(req,res)=>{
    const{
        totalAreas,
        cantidadCompetidores,
        cantidadjueces //se tendra que comprobar
    }=req.body
    try {
        const newEvento = new Evento({
            totalAreas,
            cantidadCompetidores,
            cantidadjueces,
            codigo:generarCodigoAleatorio()
        })
        const saveEvento = await newEvento.save()
        const rback = await Evento.find();
        res.send(rback);
        funciona = rback;
    } catch (error) {
        console.log(error);
    }
}