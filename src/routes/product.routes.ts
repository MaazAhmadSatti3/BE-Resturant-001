import express from 'express'
import { ProductController } from '../controller/product.controller'
import { MainProduct } from '../repositories/product.repositories'
import { IProduct } from '../types/document/IProduct'
import { SaveReqProduct, GetProduct, UpdateReqProduct, DeleteProduct } from '../types/request/product.request'
import { SaveUpdateResProduct } from '../types/response/product.response'
import CustomError from '../utils/error'

export class ProductRoutes {
    router: express.Router

    constructor() {
        console.log('constructor')
        this.router = express.Router()
        this.routes()
    }

    routes() {
        this.router.post('/saveproduct', async (req, res, next) => {
            try {
                console.log('router running')
                const product: SaveReqProduct = req.body
                const newProduct: SaveUpdateResProduct = await new ProductController().saveproduct(product)
                res.status(200).json({
                    message: newProduct
                })
            } catch (error) {
                console.log(error)
                next(error)
            }
        })

        this.router.post('/getproduct', async (req, res, next) => {
            try {
                const getreq: GetProduct = req.body
                 const product: SaveUpdateResProduct = await new ProductController().getproduct(getreq)
                 res.send(product)
            } catch (error) {
                next(error)
            }
        })

        this.router.put('/updateproduct', async (req, res, next) => {
            try {
                const product: UpdateReqProduct = req.body
                const updated_product: SaveUpdateResProduct = await new ProductController().updateproduct(product)
                const response = {
                    updated_product
                }
                res.status(200).json({
                    message: response
                })
            } catch (error) {
                next (error)
            }
        });

        this.router.delete('/deleteproduct', async (req, res, next) => {
            try {
                const delreq: DeleteProduct = req.body
                const deleted_product = await new ProductController().deleteproduct(delreq)
               if (deleted_product) {
                return res.status(200).json({
                    message: "Product Deleted"
                })
               }
               return res.status(400).json({
                   message: 'Product not found'
               })
            } catch (error) {
                next(error)
            }
        });

        this.router.post('/getproductlist', async (req, res, next) => {
            try {
                const productList: SaveUpdateResProduct[] = await new ProductController().getproductlist()
                res.status(200).json({
                    result: productList
                })
            } catch (error) {
                next(error)
            }
        });
    }
}
export const ProductRoutesApi = new ProductRoutes().router