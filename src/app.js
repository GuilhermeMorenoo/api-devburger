import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import express from "express";
import routes from "./routes.js";
import "./database/index.js"
import { resolve } from "node:path"

class App {
	constructor() {
		this.app = express();

		this.middlewares();
		this.router();
	}

	middlewares() {
		this.app.use(express.json());
		this.app.use('/product-file', express.static(resolve(__dirname, '..', 'uploads')));
	}

	router() {
		this.app.use(routes);
	}
}

export default new App().app;
