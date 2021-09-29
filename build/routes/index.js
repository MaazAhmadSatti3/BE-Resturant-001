"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainApi = exports.MainRouter = void 0;
const express_1 = __importDefault(require("express"));
const product_routes_1 = require("./product.routes");
class MainRouter {
    constructor() {
        this.router = express_1.default.Router();
        this.routes();
    }
    routes() {
        console.log('index router');
        // this.router.get('/', (req, res, next) => {
        //     res.send('kia student hy aap')
        // })
        this.router.use('/product', product_routes_1.ProductRoutesApi);
    }
}
exports.MainRouter = MainRouter;
exports.MainApi = new MainRouter().router;
