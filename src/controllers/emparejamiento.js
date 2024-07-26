import Evento from "../models/evento.model.js";

export const EmparejarCompetidores = async (req, res) => {
    const { codigoTorneo } = req.params;
    try {
        const Torneo = await Evento.findOne({ codigo: codigoTorneo });
        let ngrafica=1
        // Crear una estructura inicial para modalidades
        const categoriasOrdenadas = [
            [ // formas
                [ // todas las cintas
                    [ // femenil
                        Torneo.formas.todasLasCintas.femenil.Infantil,
                        Torneo.formas.todasLasCintas.femenil.Juvenil,
                        Torneo.formas.todasLasCintas.femenil.Adultos
                    ],
                    [ // varonil
                        Torneo.formas.todasLasCintas.varonil.Infantil,
                        Torneo.formas.todasLasCintas.varonil.Juvenil,
                        Torneo.formas.todasLasCintas.varonil.Adultos
                    ]
                ],
                [ // cintas negras
                    [ // femenil
                        Torneo.formas.cintasNegras.femenil.Infantil,
                        Torneo.formas.cintasNegras.femenil.Juvenil,
                        Torneo.formas.cintasNegras.femenil.Adultos
                    ],
                    [ // varonil
                        Torneo.formas.cintasNegras.varonil.Infantil,
                        Torneo.formas.cintasNegras.varonil.Juvenil,
                        Torneo.formas.cintasNegras.varonil.Adultos
                    ]
                ]
            ],
            [ // combates
                [ // todas las cintas
                    [ // femenil
                        Torneo.combate.todasLasCintas.femenil.Infantil,
                        Torneo.combate.todasLasCintas.femenil.Juvenil,
                        Torneo.combate.todasLasCintas.femenil.Adultos
                    ],
                    [ // varonil
                        Torneo.combate.todasLasCintas.varonil.Infantil,
                        Torneo.combate.todasLasCintas.varonil.Juvenil,
                        Torneo.combate.todasLasCintas.varonil.Adultos
                    ]
                ],
                [ // cintas negras
                    [ // femenil
                        Torneo.combate.cintasNegras.femenil.Infantil,
                        Torneo.combate.cintasNegras.femenil.Juvenil,
                        Torneo.combate.cintasNegras.femenil.Adultos
                    ],
                    [ // varonil
                        Torneo.combate.cintasNegras.varonil.Infantil,
                        Torneo.combate.cintasNegras.varonil.Juvenil,
                        Torneo.combate.cintasNegras.varonil.Adultos
                    ]
                ]
            ]
        ];
        //guia:               n1 n2 n3 n4
        // categoriasOrdenadas[0][0][0][1][0]
        // 0 formas 1 combate  |  |  |  |  | 2-
        // --------------------   |  |  |  |
        // 0 todas las cintas     |  |  |  |
        // 1 cintas negras        |  |  |  |2
        //-------------------------  |  |  |
        // 0 femenil                 |  |  |
        // 1 varonil                 |  |  |
        // ---------------------------  |  |
        // 0 infantil                   |  |3
        // 1 juvenil                    |  |
        // 2 adultos                    |  |
        // ------------------------------  |
        // # de competidor                \|
        // ---------------------------------
        // return res.status(200).send(categoriasOrdenadas[0][0][0][0]);
        // let prueba1=categoriasOrdenadas[0][0][0][0]u
        class Grafica {
            constructor(comp1,comp2,comp3,comp4, Ngrafica) {
                // this.comp1 = comp1
                // this.comp2 = comp2
                // this.comp3 = comp3
                // this.comp4 = comp4
                this.competidores = [comp1, comp2, comp3,comp4];
                this.Ngrafica= Ngrafica
            }
            comparar(){
                for (let i = 0; i < 3; i++) {
                    let a = this.compArray[i]
                    let b =this.compArray[i+1]
                    if (Math.abs(a.peso - b.peso)>4 ){
                        console.log(`Diferencia muy grande de peso entre comp${i + 1} (${a.peso}) y comp${i + 2} (${b.peso})`);
                    }
                    
                }
            }
        }
        let vaciadorDearray = (fuente,final) =>{
            for (let i = 0; i < fuente.length; i+=4) {
                const grafica= new Grafica(
                        fuente[i+1],
                        fuente[i+2],
                        fuente[i+3],
                        fuente[i+4],
                        ngrafica
                    )       
                    ngrafica+=1
                    final.push(grafica)
                }
                return final
            }


            let verificarniveles = (arr, final2) => {
                arr.forEach((nivel1, n1) => {
                    nivel1.forEach((nivel2, n2) => {
                        nivel2.forEach((nivel3, n3) => {
                            nivel3.forEach((nivel4, n4) => {
                                if (nivel4 && Array.isArray(nivel4)) {
                                    vaciadorDearray(nivel4, final2);
                                }
                            });
                        });
                    });
                });
                return final2;
            };
           let graficados = []
           verificarniveles(categoriasOrdenadas,graficados)
        // console.log(graficados)
        return res.status(200).send(graficados);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el emparejamiento');
    }
};
