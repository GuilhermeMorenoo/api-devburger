import express from "express";
import routes from "./routes.js";
import './database/index.js'

class App {
	constructor() {
		this.app = express();

		this.middlewares();
		this.router();
	}

	middlewares() {
		this.app.use(express.json());
	}

	router() {
		this.app.use(routes);
	}
}

export default new App().app;
