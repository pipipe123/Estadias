import { Router } from "express";
import { createEscuela, readEscuela, readEscuelaxNombre, updateEscuela, deleteEscuela } from "../controllers/escuela.controller.js";
import { createGimnasio, readGimnasio, readGimnasioxNombre, updateGimnasio, deleteGimnasio } from "../controllers/gimnasio.controller.js";
import { createEntrenador, readEntrenador, readEntrenadorxNombre, updateEntrenador, deleteEntrenador } from "../controllers/entrenador.controller.js";
import { createCompetidor, readCompetidor, updateCompetidor, deleteCompetidor } from "../controllers/competidor.controller.js";

import { createEvento, readEvento, updateEvento, deleteEvento, ReadEventoxCodigo } from "../controllers/evento.controller.js";

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

router.post('/Entrenador',createEntrenador);
router.get('/Entrenador',readEntrenador);
router.get('/Entrenador/:nombre',readEntrenadorxNombre);
router.put('/Entrenador',updateEntrenador);
router.delete('/Entrenador',deleteEntrenador);

router.post('/Competidor',createCompetidor);
router.post('/Competidor',readCompetidor);
router.post('/Competidor',updateCompetidor);
router.post('/Competidor',deleteCompetidor);

router.post('/Evento',createEvento);
router.get('/Evento',readEvento);
router.get('/Evento/:codigo',ReadEventoxCodigo);
router.put('/Evento',updateEvento);
router.delete('/Evento',deleteEvento);

export default router
