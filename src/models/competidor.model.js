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
    añoNacimiento:{
        type: Number,
        require: true
    },
    peso:{
        type: Number,
        require: true
    },
    modalidad:{
        type: String,
        require: true
    },
    entrenador:{
        type: String,
        // require: true
    },
    escuela:{
        type: String,
        // require: true
    },
    
})


export default moongose.model('Competidor', competidorSchema)