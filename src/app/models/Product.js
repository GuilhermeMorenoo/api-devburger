import Sequelize, { Model } from "sequelize";

class Product extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            price: Sequelize.INTEGER,
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

        return this;
    }
    static associate(models) {
        this.belongsTo(models.category, {
            foreignKey: 'category_id',
            as: 'category',
        });
    }
}

export default Product;