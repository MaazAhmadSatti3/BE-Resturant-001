"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.ProductController = void 0;
const product_repositories_1 = require("../repositories/product.repositories");
const error_1 = __importDefault(require("../utils/error"));
const tsoa_1 = require("tsoa");
let ProductController = class ProductController {
    constructor() { }
    saveproduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const new_product = yield new product_repositories_1.MainProduct().saveProduct((product));
            return (new_product);
        });
    }
    getproduct(getreq) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield new product_repositories_1.MainProduct().getProduct(getreq.id);
            if (product === null)
                throw new error_1.default(404, "Product not found");
            return (product);
        });
    }
    updateproduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const update_product = yield new product_repositories_1.MainProduct().updateProduct((product));
            if (update_product === null)
                throw new error_1.default(400, "Product not updated");
            return update_product;
        });
    }
    deleteproduct(delreq) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield new product_repositories_1.MainProduct().deleteProduct(delreq.id);
        });
    }
    getproductlist() {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield new product_repositories_1.MainProduct().getProductList();
            return (product);
        });
    }
};
__decorate([
    (0, tsoa_1.Post)("/saveproduct"),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "saveproduct", null);
__decorate([
    (0, tsoa_1.Post)("/getproduct"),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getproduct", null);
__decorate([
    (0, tsoa_1.Put)("/updateproduct"),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateproduct", null);
__decorate([
    (0, tsoa_1.Delete)('/deleteproduct'),
    (0, tsoa_1.SuccessResponse)("200", "Product Deleted"),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteproduct", null);
__decorate([
    (0, tsoa_1.Post)('/getproductlist'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getproductlist", null);
ProductController = __decorate([
    (0, tsoa_1.Route)('product'),
    (0, tsoa_1.Tags)('product'),
    __metadata("design:paramtypes", [])
], ProductController);
exports.ProductController = ProductController;
