"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
const mongoose_1 = require("mongoose");
const IProductSchema = new mongoose_1.Schema({
    Name: { type: String },
    Price: { type: String },
}, { timestamps: true });
exports.ProductSchema = (0, mongoose_1.model)('IProductSchema', IProductSchema);
