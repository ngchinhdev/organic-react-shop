import { type InferSchemaType, Schema, model } from "mongoose";

const productsSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    orgPrice: { type: Number, required: true },
    hot: { type: Boolean },
    images: { type: Array, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    mass: { type: String, required: true },
    reviews: [{
        rating: {
            type: Number,
            min: 0,
            max: 5,
        },
        comment: {
            type: String
        }
    }]
}, { timestamps: true });

type Product = InferSchemaType<typeof productsSchema>;

export default model<Product>("Product", productsSchema);