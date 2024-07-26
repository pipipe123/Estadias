import { Router } from "express";
import { createEscuela, readEscuela, readEscuelaxNombre, updateEscuela, deleteEscuela } from "../controllers/escuela.controller.js";
import { createGimnasio, readGimnasio, readGimnasioxNombre, updateGimnasio, deleteGimnasio } from "../controllers/gimnasio.controller.js";
import { createCompetidor, readCompetidor, updateCompetidor, deleteCompetidor } from "../controllers/competidor.controller.js";

import { createEvento, readEvento, updateEvento, deleteEvento, ReadEventoxCodigo } from "../controllers/evento.controller.js";
import { readCompetidoresPorTorneo } from "../controllers/grafica.controller.js";
import { EmparejarCompetidores } from "../controllers/emparejamiento.js";
const router=Router();

router.post('/Escuela',createEscuela);
router.get('/Escuela',readEscuela);
router.get('/Escuela/:nombre',readEscuelaxNombre);
router.put('/Escuela',updateEscuela);
router.delete('/Escuela',deleteEscuela);

router.post('/Gimnasio',createGimnasio);
router.get('/Gimnasio',readGimnasio);
router.get('/Gimnasio/:nombre',readGimnasioxNombre);
router.put('/Gimnasio',updateGimnasio);
router.delete('/Gimnasio',deleteGimnasio);


router.post('/Competidor',createCompetidor);
router.get('/Competidor',readCompetidor);
router.put('/Competidor',updateCompetidor);
router.delete('/Competidor',deleteCompetidor);

router.post('/Evento',createEvento);
router.get('/Evento',readEvento);
router.get('/Evento/:codigo',ReadEventoxCodigo);
router.put('/Evento',updateEvento);
router.delete('/Evento',deleteEvento);

router.get('/Grafica/:codigoTorneo', readCompetidoresPorTorneo);
router.get('/Emparejar/:codigoTorneo', EmparejarCompetidores);

export default router
