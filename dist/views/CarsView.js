"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    render: function (car) {
        return {
            id: car.id,
            name: car.name,
            brand: car.brand,
            description: car.description,
            gearbox: car.gearbox,
            price: car.price,
        };
    },
    renderMany: function (cars) {
        var _this = this;
        return cars.map(function (car) { return _this.render(car); });
    },
};
