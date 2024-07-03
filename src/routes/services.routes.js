import { Router } from "express";
import { createCompetidor, readCompetidor, updateCompetidor, deleteCompetidor } from "../controllers/competidor.controller.js";
import { createEntrenador, readEntrenador, updateEntrenador, deleteEntrenador } from "../controllers/entrenador.controller.js";
import { createEvento, readEvento, updateEvento, deleteEvento, ReadEventoxCodigo } from "../controllers/evento.controller.js";

const router=Router();

router.post('/Competidor',createCompetidor);
router.post('/Competidor',readCompetidor);
router.post('/Competidor',updateCompetidor);
router.post('/Competidor',deleteCompetidor);

router.post('/Entrenador',createEntrenador);
router.get('/Entrenador',readEntrenador);
router.put('/Entrenador',updateEntrenador);
router.delete('/Entrenador',deleteEntrenador);

router.post('/Evento',createEvento);
router.get('/Evento',readEvento);
router.get('/Evento/:codigo',ReadEventoxCodigo);
router.put('/Evento',updateEvento);
router.delete('/Evento',deleteEvento);

export default router
