import * as Yup from "yup";
import Category from "../models/Category.js";
import User from "../models/User.js";

class CategoryController {
    async store(request, response) {
        const schema = Yup.object({
            name: Yup.string().required(),
        });

        try {
            schema.validateSync(request.body, { abortEarly: false });
        } catch (err) {
            return response.status(400).json({ error: err.errors })
        }

        const { admin: isAdmin } = await User.findByPk(request.userId);

        if (!isAdmin) {
            return response.status(401).json({ error: "Usuário não autorizado" });
        }

        const { name } = request.body;

        const categoryExists = await Category.findOne({
            where: {
                name,
            },
        });

        if (categoryExists) {
            return response.status(400).json({ error: "Categoria já existe" })
        }

        const { id } = await Category.create({
            name,
        });

        return response.status(201).json({ id, name });
    }

    async index(request, response) {
        const categories = await Category.findAll();

        return response.json(categories);
    }
}

export default new CategoryController();