import { request, response } from "express";
import { endpoint } from "../config/endpoint.js";
import axios from "axios";

export const getRandomPokemon = async (req = request, res = response) => {

    try {

        const path = `${endpoint.pokemonUrl}/pokemon?offset=0&limit=151`;
        const { data } = await axios({
            method: "get",
            url: path
        });

        const {results} = data;

        res.json(results);

    } catch (error) {
        res.status(400).send(error);
    }
}