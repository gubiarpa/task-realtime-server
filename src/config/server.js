import express from "express";
import morgan from "morgan";
import { Server as SocketServer } from "socket.io";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";

import { pokemon } from "../routes/index.js";

dotenv.config();

export class Server {

    constructor() {
        /* Properties */
        this.app = express();
        this.server = http.createServer(this.app);
        console.log("Llegó hasta aquí al menos");
        // this.#sockets();
        this.port = process.env.PORT;
        this.pathList = {
            pokemon: "/api/pokemon"
        }

        /* Methods */
        this.#middlewares();
        this.#routes();
        // this.io = new SocketServer(this.server, {
        //     cors: {
        //         origin: "http://127.0.0.1:2907"
        //     }
        // });
        // this.#sockets();
    }

    #middlewares() {
        this.app.use(cors());
        this.app.use(morgan("dev"));
        this.app.use(express.json());
    }

    #routes() {
        this.app.use(this.pathList.pokemon, pokemon);
    }

    // #sockets() {
    //     this.io("connection", (socket) => {
    //         console.log(`A user connected with id: ${socket.id}`);
    //     });
    // }

    listen() {

        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });

    }
}