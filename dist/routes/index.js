"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importStar(require("express"));
var user_routes_1 = __importDefault(require("./user.routes"));
var seller_routes_1 = __importDefault(require("./seller.routes"));
var car_routes_1 = __importDefault(require("./car.routes"));
var images_routes_1 = __importDefault(require("./images.routes"));
var admin_routes_1 = __importDefault(require("./admin.routes"));
var routes = express_1.Router();
routes.get('/', function (request, response) {
    return response.json({ message: 'Hello Word' });
});
// middleware
routes.use(express_1.default.json());
routes.use(express_1.default.urlencoded());
routes.use('/images', images_routes_1.default);
routes.use('/cars', car_routes_1.default);
routes.use('/users', user_routes_1.default);
routes.use('/sellers', seller_routes_1.default);
routes.use('/admins', admin_routes_1.default);
exports.default = routes;
