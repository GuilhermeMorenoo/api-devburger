import mongoose from "mongoose";
import { number } from "yup";

const orderSchema = new mongoose.Schema({
    user: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
    },
    products: [
        {
            id: {
                type: Number,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                min: 1
            },
            price: {
                type: Number,
                required: true,
                min: 0
            },
            category: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
        },
    ],
    status: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true
    }
);

export default mongoose.model("Order", orderSchema);