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
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable camelcase */
var typeorm_1 = require("typeorm");
var Car = /** @class */ (function () {
    function Car() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Car.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Car.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Car.prototype, "brand", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Car.prototype, "km", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Car.prototype, "year", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Car.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Car.prototype, "gearbox", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Car.prototype, "price", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Car.prototype, "url_master", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Car.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Car.prototype, "updated_at", void 0);
    Car = __decorate([
        typeorm_1.Entity('cars')
    ], Car);
    return Car;
}());
exports.default = Car;
