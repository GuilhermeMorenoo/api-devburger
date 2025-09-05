import Sequelize, { Model } from "sequelize";

class Category extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
        },
            {
                sequelize,
                modelName: "category",   // nome do modelo
                tableName: "categories",  // nome real da tabela
            })

        return this;
    }
}

export default Category;