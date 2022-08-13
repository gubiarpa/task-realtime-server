import { Router } from "express";

import { getRandomPokemon } from "../controllers/index.js";

const router = Router();

router.get("/", getRandomPokemon);

export { router };
