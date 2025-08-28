import bcrypt from "bcrypt";
import Sequelize, { Model } from "sequelize";

class User extends Model {
    static init(sequelize) {
        Model.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password: Sequelize.VIRTUAL,
                password_hash: Sequelize.STRING,
                admin: Sequelize.BOOLEAN,
            },
            {
                sequelize,
            }
        );
        User.addHook('beforeSave', async (user) => {
            if (user.password) {
                user.password_hash = await bcrypt.hash(user.password, 10)
            }
        });
        return User;
    }
}

export default User;