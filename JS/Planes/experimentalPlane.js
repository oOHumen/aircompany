const BasicPlane = require('./BasicPlane');

class ExperimentalPlane extends BasicPlane {

    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, type, classificationTypes) {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this.type = type;
        this.classificationTypes = classificationTypes;

    }

    getType() {
        return this.type;
    }

    getClassificationLevel() {
        return this.classificationTypes;
    }
}

module.exports = ExperimentalPlane;