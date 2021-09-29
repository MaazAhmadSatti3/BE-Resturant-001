"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutesApi = exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("../controller/product.controller");
class ProductRoutes {
    constructor() {
        console.log('constructor');
        this.router = express_1.default.Router();
        this.routes();
    }
    routes() {
        this.router.post('/saveproduct', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('router running');
                const product = req.body;
                const newProduct = yield new product_controller_1.ProductController().saveproduct(product);
                res.status(200).json({
                    message: newProduct
                });
            }
            catch (error) {
                console.log(error);
                next(error);
            }
        }));
        this.router.post('/getproduct', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const getreq = req.body;
                const product = yield new product_controller_1.ProductController().getproduct(getreq);
                res.send(product);
            }
            catch (error) {
                next(error);
            }
        }));
        this.router.put('/updateproduct', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const product = req.body;
                const updated_product = yield new product_controller_1.ProductController().updateproduct(product);
                const response = {
                    updated_product
                };
                res.status(200).json({
                    message: response
                });
            }
            catch (error) {
                next(error);
            }
        }));
        this.router.delete('/deleteproduct', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const delreq = req.body;
                const deleted_product = yield new product_controller_1.ProductController().deleteproduct(delreq);
                res.status(200).json({
                    message: "Product Deleted"
                });
            }
            catch (error) {
                next(error);
            }
        }));
        this.router.post('/getproductlist', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const productList = yield new product_controller_1.ProductController().getproductlist();
                res.status(200).json({
                    result: productList
                });
            }
            catch (error) {
                next(error);
            }
        }));
    }
}
exports.ProductRoutes = ProductRoutes;
exports.ProductRoutesApi = new ProductRoutes().router;
