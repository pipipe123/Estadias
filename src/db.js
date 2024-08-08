import mongoose from "mongoose";


export const connectDB = async () => {

    try {
        await mongoose.connect('mongodb+srv://gimbory21:1234@mongo.pjnfgy5.mongodb.net/')
        console.log('>>>>> Conectado')
        
    } catch (error) {
        console.log(error)     
    }
}
