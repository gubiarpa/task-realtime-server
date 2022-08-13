import { request, response } from "express";

export const getRandomPokemon = async (req = request, res = response) => {

    try {
        res.json({
            id: 47707540,
            name: "Charmander"
        });
    } catch (error) {
        console.error('Can not get list of entities');
        console.error(error);
        res.status(400).send('Something broke!');
    }
}