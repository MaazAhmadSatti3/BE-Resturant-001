import { ProductSchema } from "../model/Product.model";
import { IProduct } from "../types/document/IProduct";

export class MainProduct {
    constructor() {}

    saveProduct(PRODuct: IProduct) {
        return new ProductSchema(PRODuct).save()
    }

    getProduct(_id: string) {
        return ProductSchema.findById(_id)
    }

    updateProduct(prodUCT: IProduct) {
        return ProductSchema.findByIdAndUpdate(prodUCT._id, prodUCT, {
            new: true
        })
    }

    deleteProduct(_id: string) {
        return ProductSchema.findByIdAndDelete(_id)
    }

    getProductList() {
        return ProductSchema.find()
    }
}