import { Router } from "express";
import { createCompetidor } from "../controllers/competidor.controller.js";
import { createEntrenador } from "../controllers/entrenador.controller.js";
import { createEvento } from "../controllers/evento.controller.js";

const router=Router();

router.post('/Competidor',createCompetidor)
router.post('/Entrenador',createEntrenador)
router.post('/Evento',createEvento)

export default router
