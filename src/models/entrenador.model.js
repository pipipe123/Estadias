import moongose from "mongoose"
const competidorSchema = new moongose.Schema({
    nombre:{
        type: String,
        require: true
    },
    grado:{
        type: String,
        require: true
    },
    escuela:{
        type: String,
        require:true
    },
})


export default moongose.model('Entrenador', competidorSchema)