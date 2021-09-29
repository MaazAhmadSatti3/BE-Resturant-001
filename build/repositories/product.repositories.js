"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainProduct = void 0;
const Product_model_1 = require("../model/Product.model");
class MainProduct {
    constructor() { }
    saveProduct(PRODuct) {
        return new Product_model_1.ProductSchema(PRODuct).save();
    }
    getProduct(_id) {
        return Product_model_1.ProductSchema.findById(_id);
    }
    updateProduct(prodUCT) {
        return Product_model_1.ProductSchema.findByIdAndUpdate(prodUCT._id, prodUCT, {
            new: true
        });
    }
    deleteProduct(_id) {
        return Product_model_1.ProductSchema.findByIdAndDelete(_id);
    }
    getProductList() {
        return Product_model_1.ProductSchema.find();
    }
}
exports.MainProduct = MainProduct;
