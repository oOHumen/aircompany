const PassengerPlane = require('./Planes/PassengerPlane');
const MilitaryPlane = require('./Planes/MilitaryPlane');
const militaryTypes = require('./models/militaryTypes');
const ExperimentalPlane = require('./Planes/ExperimentalPlane');

class Airport {

    constructor(planes) {
        this.planes = planes;
    }

    getPassengerPlanes() {
        let passengerPlanesList = [];
        for (let plane of this.planes) {
            if (plane instanceof PassengerPlane) {
                passengerPlanesList.push(plane);
            }
        }
        return passengerPlanesList;
    }

    getMilitaryPlanes() {
        let militaryPlanesList = [];
        this.planes.forEach(plane => {
            if (plane instanceof MilitaryPlane) {
                militaryPlanesList.push(plane);
            }
        });
        return militaryPlanesList;
    }

    getPassengerPlaneWithMaxPassengersCapacity() {
        let passengerPlanes = this.getPassengerPlanes();
        let planeWithMaxCapacity = passengerPlanes[0];
        for (let i = 0; i < passengerPlanes.length; i++) {
            if (passengerPlanes[i].getPassengersCapacity() > planeWithMaxCapacity.getPassengersCapacity()) {
                planeWithMaxCapacity = passengerPlanes[i];
            }
        }
        return planeWithMaxCapacity;
    }

    getTransportMilitaryPlanes() {
        let transportMilitaryPlanesList = [];
        let militaryPlanes = this.getMilitaryPlanes();
        for (let i = 0; i < militaryPlanes.length; i++) {
            if (militaryPlanes[i].getMilitaryType() === militaryTypes.transport) {
                transportMilitaryPlanesList.push(militaryPlanes[i]);
            }
        }
        return transportMilitaryPlanesList;
    }

    getBomberMilitaryPlanes() {
        let bomberMilitaryPlanesList = [];
        let militaryPlanes = this.getMilitaryPlanes();
        for (let i = 0; i < militaryPlanes.length; i++) {
            if (militaryPlanes[i].getMilitaryType() === militaryTypes.bomber) {
                bomberMilitaryPlanesList.push(militaryPlanes[i]);
            }
        }
        return bomberMilitaryPlanesList;
    }

    getExperimentalPlanes() {
        let experimentalPlanesList = [];
        this.planes.forEach(plane => {
            if (plane instanceof ExperimentalPlane) {
                experimentalPlanesList.push(plane);
            }
        });
        return experimentalPlanesList;
    }

    sortByMaxDistance() {
        this.planes.sort((a, b) => (a.getMaxFlightDistance() > b.getMaxFlightDistance()) ? 1 : -1);
        return this;
    }

    //Sorts by max speed
    // @return Airport

    sortByMaxSpeed() {
        this.planes.sort((a, b) => (a.getMaxSpeed() > b.getMaxSpeed()) ? 1 : -1);
        return this;
    }

    sortByMaxLoadCapacity() {
        this.planes.sort((a, b) => (a.getMaxLoadCapacity() > b.getMaxLoadCapacity()) ? 1 : -1);
        return this;
    }

    getPlanes() {
        return this.planes;
    }

    static getPrintPlanesList(planes) {
        return JSON.stringify(planes);
    }
}

module.exports = Airport;