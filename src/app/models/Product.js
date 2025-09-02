import Sequelize, { Model } from "sequelize";

class Product extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            price: Sequelize.INTEGER,
            category: Sequelize.STRING,
            path: Sequelize.STRING,
            url: {
                type: Sequelize.VIRTUAL,
                get() {
                    return `http://localhost:3001/product-file/${this.path}`
                }
            }
        }, 
        {
            sequelize,
            modelName: "product",   // nome do modelo
            tableName: "products",  // nome real da tabela
        })
    }
}

export default Product;