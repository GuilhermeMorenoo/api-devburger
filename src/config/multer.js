import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { extname, resolve} from "node:path"
import multer from "multer";
import { v4 } from "uuid";

export default {
    storage: multer.diskStorage({
        destination: resolve(__dirname, "..", "..", "uploads"),
        filename: (_request, file, callback) =>
            callback(null, v4() + extname(file.originalname))
    })
}