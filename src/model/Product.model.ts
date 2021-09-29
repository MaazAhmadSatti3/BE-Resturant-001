import { Schema, model } from "mongoose";
import { IProduct } from "../types/document/IProduct";

const IProductSchema = new Schema(
    {
        Name: { type: String },
        Price: { type: String },
    },
    { timestamps: true }
);
export const ProductSchema = model<IProduct>('IProductSchema', IProductSchema)