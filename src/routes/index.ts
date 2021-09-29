import express from 'express'
import { ProductRoutesApi } from './product.routes'

export class MainRouter {
    router: express.Router

    constructor() {
        this.router = express.Router()
        this.routes()
    }

    routes() {
        console.log('index router')
        // this.router.get('/', (req, res, next) => {
        //     res.send('kia student hy aap')
        // })
        this.router.use('/product', ProductRoutesApi)
    }

}
export const MainApi = new MainRouter().router