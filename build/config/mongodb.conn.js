"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonStatConnection = exports.DbMongo = void 0;
const mongoose_1 = require("mongoose");
class DbMongo {
    constructor() {
    }
    connect(h, dbName, u, pass, p) {
        let connectionuri = `mongodb://${h}:${p}/${dbName}`;
        if (u != undefined && pass != undefined) {
            connectionuri = `mongodb+srv://${u}:${pass}@${h}/${dbName}`;
        }
        (0, mongoose_1.connect)(connectionuri, (err) => {
            if (err) {
                console.log(err);
                console.log('DataBase Connection Falied');
            }
            else {
                console.log('connected with database');
            }
        });
    }
}
exports.DbMongo = DbMongo;
exports.MonStatConnection = mongoose_1.connection.readyState;
