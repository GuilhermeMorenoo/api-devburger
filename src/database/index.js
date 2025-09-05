import Sequelize from "sequelize";
import User from "../app/models/User.js";
import configDatabase from "../config/database.cjs";
import Category from "../app/models/Category.js";
import Product from "../app/models/Product.js";

const models = [User, Product, Category];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(configDatabase);
        models.map((model) => model.init(this.connection))
            .map((model) => model.associate && model.associate(this.connection.models));
    }
}


export default new Database();
