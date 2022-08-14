import { request, response } from "express";
import { endpoint } from "../config/endpoint.js";
import axios from "axios";


export const getRandomPokemon = async (req = request, res = response) => {

    const getPokemonInfo = async ({ name, url }) => {
        try {

            const { data } = await axios({ method: 'get', url });

            return {
                name: data.name,
                image: data.sprites.other.dream_world.front_default
            };

        } catch (error) {
            return {};
        }
    }

    const getRandomNumberUnderSup = max => Math.floor(Math.random() * max);

    try {

        const url = `${endpoint.pokemonUrl}/pokemon?offset=0&limit=151`;
        const { data } = await axios({ method: 'get', url });

        const { results } = data;

        const numberPokemon1 = getRandomNumberUnderSup(151);
        const numberPokemon2 = getRandomNumberUnderSup(151);

        const pokemon1 = await getPokemonInfo(results[numberPokemon1]);
        const pokemon2 = await getPokemonInfo(results[numberPokemon2]);

        res.json({
            pokemon1,
            pokemon2
        });

    } catch (error) {
        res.status(400).send(error);
    }
}