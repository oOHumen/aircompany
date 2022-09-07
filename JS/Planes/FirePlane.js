const BasicPlane = require('./BasicPlane');

class FirePlane extends BasicPlane {

    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, waterTankCapacity) {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this.waterTankCapacity = waterTankCapacity;
    }
    getWaterTankCapacity() {
        return this.waterTankCapacity;
    }
}

module.exports = FirePlane;