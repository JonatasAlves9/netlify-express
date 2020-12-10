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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var typeorm_1 = require("typeorm");
var Car_1 = __importDefault(require("../models/Car"));
var CreateCarService_1 = __importDefault(require("../services/CreateCarService"));
var UpdateCarService_1 = __importDefault(require("../services/UpdateCarService"));
var carRouter = express_1.Router();
carRouter.get('/', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var carRepository, search, cars, resultsUpper;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                carRepository = typeorm_1.getRepository(Car_1.default);
                search = request.query.search;
                return [4 /*yield*/, carRepository.find()];
            case 1:
                cars = _a.sent();
                resultsUpper = search
                    ? cars.filter(function (car) {
                        return car.name.toLowerCase().includes(search.toString().toLowerCase());
                    })
                    : cars;
                return [2 /*return*/, response.json(resultsUpper)];
        }
    });
}); });
carRouter.get('/', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var carRepository, search, cars, resultsUpper;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                carRepository = typeorm_1.getRepository(Car_1.default);
                search = request.query.search;
                return [4 /*yield*/, carRepository.find()];
            case 1:
                cars = _a.sent();
                resultsUpper = search
                    ? cars.filter(function (car) {
                        return car.name.toLowerCase().includes(search.toString().toLowerCase());
                    })
                    : cars;
                return [2 /*return*/, response.json(resultsUpper)];
        }
    });
}); });
carRouter.put('/:id', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, name_1, brand, km, year, description, gearbox, price, urlMaster, updateCar, car, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                id = request.params.id;
                _a = request.body, name_1 = _a.name, brand = _a.brand, km = _a.km, year = _a.year, description = _a.description, gearbox = _a.gearbox, price = _a.price, urlMaster = _a.urlMaster;
                updateCar = new UpdateCarService_1.default();
                return [4 /*yield*/, updateCar.execute({
                        id: id,
                        name: name_1,
                        brand: brand,
                        km: km,
                        year: year,
                        description: description,
                        gearbox: gearbox,
                        price: price,
                        url_master: urlMaster,
                    })];
            case 1:
                car = _b.sent();
                return [2 /*return*/, response.json(car)];
            case 2:
                error_1 = _b.sent();
                return [2 /*return*/, response.status(400).json({ error: error_1.message })];
            case 3: return [2 /*return*/];
        }
    });
}); });
carRouter.delete('/:id', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, carRepository, checkCarExists, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = request.params.id;
                carRepository = typeorm_1.getRepository(Car_1.default);
                return [4 /*yield*/, carRepository.findOne({
                        where: { id: id },
                    })];
            case 1:
                checkCarExists = _a.sent();
                if (!checkCarExists) {
                    throw new Error('car not found');
                }
                carRepository.createQueryBuilder()
                    .delete()
                    .from(Car_1.default)
                    .where("id = :id", { id: id })
                    .execute();
                return [2 /*return*/, response.json()];
            case 2:
                error_2 = _a.sent();
                return [2 /*return*/, response.status(400).json({ error: error_2.message })];
            case 3: return [2 /*return*/];
        }
    });
}); });
carRouter.post('/', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name_2, brand, km, year, description, gearbox, price, urlMaster, createCar, car, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = request.body, name_2 = _a.name, brand = _a.brand, km = _a.km, year = _a.year, description = _a.description, gearbox = _a.gearbox, price = _a.price, urlMaster = _a.urlMaster;
                createCar = new CreateCarService_1.default();
                return [4 /*yield*/, createCar.execute({
                        name: name_2,
                        brand: brand,
                        km: km,
                        year: year,
                        description: description,
                        gearbox: gearbox,
                        price: price,
                        url_master: urlMaster,
                    })];
            case 1:
                car = _b.sent();
                return [2 /*return*/, response.json(car)];
            case 2:
                error_3 = _b.sent();
                return [2 /*return*/, response.status(400).json({ error: error_3.message })];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.default = carRouter;
