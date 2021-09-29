import { IProduct } from "../types/document/IProduct";
import { MainProduct } from "../repositories/product.repositories";
import CustomError from "../utils/error"
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse } from "tsoa"
import { SaveUpdateResProduct } from "../types/response/product.response";
import { SaveReqProduct, UpdateReqProduct, GetProduct, DeleteProduct } from "../types/request/product.request";

@Route('product')
@Tags('product')

export class ProductController {
    
    constructor() {}

    @Post("/saveproduct")
    async saveproduct(@Body() product: SaveReqProduct): Promise<SaveUpdateResProduct> {
        const new_product: IProduct = await new MainProduct().saveProduct(<IProduct> (product))
        return <SaveUpdateResProduct> (new_product)
    }

    @Post("/getproduct")
    async getproduct(@Body() getreq: GetProduct): Promise<SaveUpdateResProduct> {
        const product: IProduct = <any> await new MainProduct().getProduct(getreq.id)
        if (product === null) throw new CustomError(404, "Product not found")
        return <SaveUpdateResProduct> (product)
    }

    @Put("/updateproduct")
    async updateproduct(@Body() product: UpdateReqProduct): Promise<SaveUpdateResProduct> {
        const update_product: IProduct = await new MainProduct().updateProduct(<IProduct> (product))
        if (update_product === null) throw new CustomError(400, "Product not updated")
        return <SaveUpdateResProduct> update_product
    }

    @Delete('/deleteproduct')
    @SuccessResponse("200", "Product Deleted")
    async deleteproduct(@Body() delreq: DeleteProduct): Promise<SaveUpdateResProduct> {
        return <SaveUpdateResProduct> await new MainProduct().deleteProduct(delreq.id)
    }

    @Post('/getproductlist')
    async getproductlist(): Promise<SaveUpdateResProduct[]> {
        const product: IProduct[] = await new MainProduct().getProductList()
        return <SaveUpdateResProduct[]> (product)
    }

}