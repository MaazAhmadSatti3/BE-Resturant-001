"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const mongodb_conn_1 = require("./config/mongodb.conn");
const health = require('@cloudnative/health-connect');
let healthcheck = new health.HealthChecker();
const constant_1 = require("./utils/constant");
let server = null;
const PORT = process.env.PORT || 3000;
function initApplication() {
    new mongodb_conn_1.DbMongo().connect(constant_1.MongoCluster, constant_1.MongoDbName, constant_1.Mongo_user_name, constant_1.Mongo_Pass);
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use((0, morgan_1.default)("tiny"));
    app.use(express_1.default.static("public"));
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use((0, cors_1.default)());
    app.use('/health', health.LivenessEndpoint(healthcheck));
    app.use('/ready', health.ReadinessEndpoint(healthcheck));
    app.use("/swagger", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(undefined, {
        swaggerOptions: {
            url: "/swagger.json",
        }
    }));
    app.use(routes_1.MainApi);
    app.use((err, req, res, next) => {
        res.locals.message = err.message;
        const status = err.statusCode || 300;
        res.locals.status = status;
        res.locals.error = req.app.get('env') === 'development' ? err : {};
        res.status(status);
        return res.json({
            error: {
                message: err.message
            }
        });
    });
    return app;
}
function start() {
    const app = initApplication();
    server = app.listen(process.env.PORT || PORT, () => {
        console.log(`Server started on PORT:` + PORT);
    });
}
// Start the application
start();
