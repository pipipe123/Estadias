import Competidor from "../models/competidor.model.js";
import Evento from "../models/evento.model.js";

// Define una clase para los competidores con los campos necesarios
class CompetidorSimplificado {
    constructor({ nombre, edad, cinta, peso, estatura, gimnasio, escuela }) {
        this.nombre = nombre;
        this.edad = edad;
        this.cinta = cinta;
        this.peso = peso;
        this.estatura = estatura;
        this.gimnasio = gimnasio;
        this.escuela = escuela;
    }
}

const ordenarPorCintaEdadImc = (arr) => {
    return arr.slice().sort((a, b) => {
        if (a.grado !== b.grado) {
            return b.grado - a.grado;
        }
        if (a.anioNacimiento !== b.anioNacimiento) {
            return a.anioNacimiento - b.anioNacimiento;
        }
        return a.imc - b.imc;
    });
};

// Esta función ordenará los cinturones negros por peso, y luego por edad
const ordenarCinturonesNegros = (arr) => {
    return arr.slice().sort((a, b) => {
        if (a.peso !== b.peso) {
            return b.peso - a.peso;
        }
        return a.anioNacimiento - b.anioNacimiento;
    });
};

// Esta función ordenará todas las cintas considerando el grado y una diferencia de peso mayor a 4kg
const ordenarTodasLasCintas = (arr) => {
    return arr.slice().sort((a, b) => {
        if (a.grado !== b.grado) {
            return a.grado - b.grado;
        }
        if (Math.abs(a.peso - b.peso) > 4) {
            return b.peso - a.peso;
        }
        return b.peso - a.peso;
    });
};

// Esta función ordenará por edad
const ordenarPorEdad = (arr) => {
    return arr.slice().sort((a, b) => a.anioNacimiento - b.anioNacimiento);
};

export const readCompetidoresPorTorneo = async (req, res) => {
    const { codigoTorneo } = req.params;

    try {
        const competidores = await Competidor.find({ torneo: codigoTorneo });

        if (competidores.length === 0) {
            return res.status(404).send('No se encontraron competidores para este torneo');
        }

        // Crear estructuras iniciales para "Combate" y "Formas"
        const estructuraInicial = {
            femenil: {
                todasLasCintas: {
                    Infantil: [],
                    Juvenil: [],
                    Adultos: []
                },
                cintasNegras: {
                    Infantil: [],
                    Juvenil: [],
                    Adultos: []
                }
            },
            varonil: {
                todasLasCintas: {
                    Infantil: [],
                    Juvenil: [],
                    Adultos: []
                },
                cintasNegras: {
                    Infantil: [],
                    Juvenil: [],
                    Adultos: []
                }
            }
        };

        const combate = JSON.parse(JSON.stringify(estructuraInicial));
        const formas = JSON.parse(JSON.stringify(estructuraInicial));

        // Añadir competidores a "Combate" y "Formas" según sexo y modalidad
        competidores.forEach(c => {
            const esCintaNegra = c.grado === "0";
            const esFemenil = c.sexo === 'Femenil';
            const modalidad = c.modalidad;

            const destinoCombate = esFemenil ? combate.femenil : combate.varonil;
            const destinoFormas = esFemenil ? formas.femenil : formas.varonil;

            const grupo = c.categoria === 'Infantil' || c.categoria === 'Cadetes' ? 'Infantil' :
                          c.categoria === 'Junior' ? 'Juvenil' : 'Adultos';

            const competidorData = {
                nombre: c.nombre,
                edad: new Date().getFullYear() - c.anioNacimiento,
                cinta: c.cinta,
                peso: c.peso,
                estatura: c.estatura,
                gimnasio: c.gimnasio,
                escuela: c.escuela,
                grado: c.grado,
                imc: c.peso / ((c.estatura / 100) ** 2)
            };

            const nuevoCompetidor = new Competidor(competidorData);

            if (esCintaNegra) {
                if (modalidad.includes('combate')) {
                    destinoCombate.cintasNegras[grupo].push(nuevoCompetidor);
                }
                if (modalidad.includes('formas')) {
                    destinoFormas.cintasNegras[grupo].push(nuevoCompetidor);
                }
            } else {
                if (modalidad.includes('combate')) {
                    destinoCombate.todasLasCintas[grupo].push(nuevoCompetidor);
                }
                if (modalidad.includes('formas')) {
                    destinoFormas.todasLasCintas[grupo].push(nuevoCompetidor);
                }
            }
        });

        // Ordenar los competidores en "Combate" y "Formas"
        const ordenarEstructura = (estructura, ordenarFn) => ({
            femenil: {
                todasLasCintas: {
                    Infantil: ordenarFn(estructura.femenil.todasLasCintas.Infantil),
                    Juvenil: ordenarFn(estructura.femenil.todasLasCintas.Juvenil),
                    Adultos: ordenarFn(estructura.femenil.todasLasCintas.Adultos)
                },
                cintasNegras: {
                    Infantil: ordenarCinturonesNegros(estructura.femenil.cintasNegras.Infantil),
                    Juvenil: ordenarCinturonesNegros(estructura.femenil.cintasNegras.Juvenil),
                    Adultos: ordenarCinturonesNegros(estructura.femenil.cintasNegras.Adultos)
                }
            },
            varonil: {
                todasLasCintas: {
                    Infantil: ordenarFn(estructura.varonil.todasLasCintas.Infantil),
                    Juvenil: ordenarFn(estructura.varonil.todasLasCintas.Juvenil),
                    Adultos: ordenarFn(estructura.varonil.todasLasCintas.Adultos)
                },
                cintasNegras: {
                    Infantil: ordenarCinturonesNegros(estructura.varonil.cintasNegras.Infantil),
                    Juvenil: ordenarCinturonesNegros(estructura.varonil.cintasNegras.Juvenil),
                    Adultos: ordenarCinturonesNegros(estructura.varonil.cintasNegras.Adultos)
                }
            }
        });

        const resultado = {
            combate: ordenarEstructura(combate, ordenarPorCintaEdadImc),
            formas: ordenarEstructura(formas, ordenarPorCintaEdadImc)
        };

        console.log(resultado);

        // Actualizar el evento con el resultado
        const evento = await Evento.findOneAndUpdate(
            { codigo: codigoTorneo },
            { combate: resultado.combate, formas: resultado.formas },
            { new: true, upsert: true }
        );

        res.json(evento);
    } catch (error) {
        console.error('Error al buscar competidores:', error);
        res.status(500).send('Error al buscar competidores');
    }
};
