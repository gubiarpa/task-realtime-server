const { Router } = require("express");
const {
    getRandomPokemon
} = require("../controllers");

const router = Router();

router.get("/", getRandomPokemon);

module.exports = router;