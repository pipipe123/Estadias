import mongoose from "mongoose";

const competidorSchema = new mongoose.Schema({
    totalAreas: {
        type: Number,
        required: true
    },
    cantidadCompetidores: {
        type: Number,
        required: true
    },
    cantidadJueces: {
        type: Number,
        required: true
    },
    codigo: {
        type: String,
        required: true
    },
    combate: {
        type: Object,
        required: true
    },
    formas: {
        type: Object,
        required: true
    }
});

export default mongoose.model('Evento', competidorSchema);
