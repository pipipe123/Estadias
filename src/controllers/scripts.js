import Competidor from '../models/competidor.model.js'; // Ajusta la ruta según tu estructura de archivos

const nombresMasculinos = [
    "Juan", "Carlos", "Miguel", "Luis", "Francisco", "Jose", "Pedro", "Daniel", "Javier", "Manuel"
];

const nombresFemeninos = [
    "Sofia", "Isabella", "Camila", "Valentina", "Mariana", "Gabriela", "Andrea", "Ana", "Fernanda", "Victoria"
];

const apellidos = [
    "Gomez", "Rodriguez", "Lopez", "Martinez", "Hernandez", "Garcia", "Perez", "Sanchez", "Ramirez", "Torres",
    "Gonzalez", "Rivera", "Mendez", "Castro", "Vargas", "Romero", "Chavez", "Ortiz", "Ramos", "Morales"
];

const gimnasios = ["Sur", "Cefodem", "Oriente"];

const beltToGupMap = {
    "Cinturón Blanco": 10,
    "Cinturón Blanco - Avanzado": 9,
    "Cinturón Amarillo": 8,
    "Cinturón Amarillo - Avanzado": 7,
    "Cinturón Verde": 6,
    "Cinturón Verde - Avanzado": 5,
    "Cinturón Azul": 4,
    "Cinturón Azul - Avanzado": 3,
    "Cinturón Rojo": 2,
    "Cinturón Rojo - Avanzado": 1,
    "Cinturón Negro": 0
};

const modalidades = ["formas", "combate", "formas y combate"];

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

const generarCompetidorAleatorio = async () => {
    const esMasculino = Math.random() < 0.5;
    const primerNombre = esMasculino ? getRandomElement(nombresMasculinos) : getRandomElement(nombresFemeninos);
    const segundoNombre = esMasculino ? getRandomElement(nombresMasculinos) : getRandomElement(nombresFemeninos);
    const sexo = esMasculino ? "Varonil" : "Femenil";

    const nombreCompleto = `${primerNombre} ${segundoNombre} ${getRandomElement(apellidos)} ${getRandomElement(apellidos)}`;
    const cinta = getRandomElement(Object.keys(beltToGupMap));
    const estatura = Math.floor(Math.random() * (200 - 150 + 1)) + 150; // Estatura entre 150 y 200 cm
    const anioNacimiento = Math.floor(Math.random() * (2012 - 1984 + 1)) + 1984; // Año de nacimiento entre 1984 y 2012
    const peso = Math.floor(Math.random() * (100 - 30 + 1)) + 30; // Peso entre 30 y 100 kg
    const modalidad = getRandomElement(modalidades);
    const gimnasio = getRandomElement(gimnasios);
    const torneo = "fpWa8CNR"; // Puedes ajustar esto según sea necesario

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
            return; // Edad fuera de rango, no crear competidor
    }

    const gradoNumero = beltToGupMap[cinta];

    const nuevoCompetidor = new Competidor({
        nombre: nombreCompleto,
        cinta,
        grado: gradoNumero,
        anioNacimiento,
        peso,
        sexo,
        estatura,
        modalidad,
        gimnasio,
        escuela: "Instituto Monarca", // Suponemos que todos los gimnasios pertenecen a esta escuela
        categoria,
        torneo
    });

    try {
        await nuevoCompetidor.save();
        console.log(`Competidor ${nombreCompleto} creado.`);
    } catch (error) {
        console.error('Error al crear el competidor:', error);
    }
};

const iniciarGeneracionCompetidores = () => {
    setInterval(generarCompetidorAleatorio, 200); // Generar competidor cada 500 ms
};

export default iniciarGeneracionCompetidores;
