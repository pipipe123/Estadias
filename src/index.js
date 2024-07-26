import app from "./app.js"
import { connectDB } from "./db.js"
import iniciarGeneracionCompetidores from "./controllers/scripts.js"
connectDB()
app.listen(3000)
console.log("UP on port ", 3000)
// iniciarGeneracionCompetidores()

// combate{
//     femenil[
//         todasLasCintas[
//             infantil[]
//             juvenil[]
//             adultos[]
//         ]
//         cintasNegras[
//             infantil[]
//             juvenil[]
//             adultos[]
//         ]
//     ]
//     varonil[
//         todasLasCintas[
//             infantil[]
//             juvenil[]
//             adultos[]
//         ]
//         cintasNegras[
//             infantil[]
//             juvenil[]
//             adultos[]
//         ]
//     ]
// }
// Formas{
//     femenil[
//         todasLasCintas[
//             infantil[]
//             juvenil[]
//             adultos[]
//         ]
//         cintasNegras[
//             infantil[]
//             juvenil[]
//             adultos[]
//         ]
//     ]
//     varonil[
//         todasLasCintas[
//             infantil[]
//             juvenil[]
//             adultos[]
//         ]
//         cintasNegras[
//             infantil[]
//             juvenil[]
//             adultos[]
//         ]
//     ]
// }

