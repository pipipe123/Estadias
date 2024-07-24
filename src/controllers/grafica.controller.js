import Competidor from "../models/competidor.model.js";
import Gimnasio from "../models/gimnasio.model.js";
import Escuela from "../models/escuela.model.js";
import Evento from "../models/evento.model.js";

// Función para ordenar por grado (mayor a menor), peso (mayor a menor), y edad (menor a mayor)
const ordenarPorPrioridad = (arr) => {
    return arr.slice().sort((a, b) => {
        if (a.grado !== b.grado) {
            return b.grado - a.grado;
        }
        if (a.peso !== b.peso) {
            return b.peso - a.peso;
        }
        return a.anioNacimiento - b.anioNacimiento;
    });
};

// Función para ordenar cinturones negros por peso (mayor a menor) y edad (menor a mayor)
const ordenarCinturonesNegros = (arr) => {
    return arr.slice().sort((a, b) => {
        if (a.peso !== b.peso) {
            return b.peso - a.peso;
        }
        return a.anioNacimiento - b.anioNacimiento;
    });
};

// Función para ordenar todas las cintas con un criterio especial de diferencia de peso
const ordenarTodasLasCintas = (arr) => {
    return arr.slice().sort((a, b) => {
        if (a.grado !== b.grado) {
            return b.grado - a.grado;
        }
        if (Math.abs(a.peso - b.peso) > 4) {
            return b.peso - a.peso;
        }
        return b.peso - a.peso;
    });
};

// Función para ordenar por edad (mayor a menor)
const ordenarPorEdad = (arr) => {
    return arr.slice().sort((a, b) => b.anioNacimiento - a.anioNacimiento);
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
            const esCintaNegra = c.grado === 0;
            const esFemenil = c.sexo === 'Femenil';
            const modalidad = c.modalidad;

            const destinoCombate = esFemenil ? combate.femenil : combate.varonil;
            const destinoFormas = esFemenil ? formas.femenil : formas.varonil;

            const grupo = c.categoria === 'Infantil' || c.categoria === 'Cadetes' ? 'Infantil' :
                          c.categoria === 'Junior' ? 'Juvenil' : 'Adultos';

            if (esCintaNegra) {
                if (modalidad.includes('combate')) {
                    destinoCombate.cintasNegras[grupo].push(c);
                }
                if (modalidad.includes('formas')) {
                    destinoFormas.cintasNegras[grupo].push(c);
                }
            } else {
                if (modalidad.includes('combate')) {
                    destinoCombate.todasLasCintas[grupo].push(c);
                }
                if (modalidad.includes('formas')) {
                    destinoFormas.todasLasCintas[grupo].push(c);
                }
            }
        });

        // Ordenar los competidores en "Combate" y "Formas"
        const ordenarEstructura = (estructura, ordenarFn) => ({
            femenil: {
                todasLasCintas: {
                    Infantil: ordenarPorEdad(ordenarFn(estructura.femenil.todasLasCintas.Infantil)),
                    Juvenil: ordenarPorEdad(ordenarFn(estructura.femenil.todasLasCintas.Juvenil)),
                    Adultos: ordenarPorEdad(ordenarFn(estructura.femenil.todasLasCintas.Adultos))
                },
                cintasNegras: {
                    Infantil: ordenarPorEdad(ordenarCinturonesNegros(estructura.femenil.cintasNegras.Infantil)),
                    Juvenil: ordenarPorEdad(ordenarCinturonesNegros(estructura.femenil.cintasNegras.Juvenil)),
                    Adultos: ordenarPorEdad(ordenarCinturonesNegros(estructura.femenil.cintasNegras.Adultos))
                }
            },
            varonil: {
                todasLasCintas: {
                    Infantil: ordenarPorEdad(ordenarFn(estructura.varonil.todasLasCintas.Infantil)),
                    Juvenil: ordenarPorEdad(ordenarFn(estructura.varonil.todasLasCintas.Juvenil)),
                    Adultos: ordenarPorEdad(ordenarFn(estructura.varonil.todasLasCintas.Adultos))
                },
                cintasNegras: {
                    Infantil: ordenarPorEdad(ordenarCinturonesNegros(estructura.varonil.cintasNegras.Infantil)),
                    Juvenil: ordenarPorEdad(ordenarCinturonesNegros(estructura.varonil.cintasNegras.Juvenil)),
                    Adultos: ordenarPorEdad(ordenarCinturonesNegros(estructura.varonil.cintasNegras.Adultos))
                }
            }
        });

        const resultado = {
            combate: ordenarEstructura(combate, ordenarTodasLasCintas),
            formas: ordenarEstructura(formas, ordenarPorPrioridad)
        };
        console.log(resultado)
        res.json(resultado);
    } catch (error) {
        console.error('Error al buscar competidores:', error);
        res.status(500).send('Error al buscar competidores');
    }
};
