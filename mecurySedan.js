//this includes the vehicle class as a module
const VehicleModule = require("./vehicle").Vehicle

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maxPassengers = 5
        this.passenger = 0
        this.numberOfWheels = 4
        this.maxSpeed = 160
        this.fuel = 10
        this.scheduleService = false
    }

    loadPassenger(num) {
        if ((num + this.passenger) <= this.maxPassengers) {
            this.passenger = num
            return this.passenger
        } else {
            console.log(this.model + " " + this.make + " does not have enough space to take all passengers.")
        }
    }

    startVehicle() {
        if(this.fuel > 0) {
            console.log("Engine has started")
            return this.started = true
        } else {
            console.log("Not enough fuel")
            return this.started = false
        }
    }

    checkService(mileage) {
        if(this.mileage > 30000) {
            console.log("Vehicle requires maintenance")
            this.scheduleService = true
            return this.scheduleService
        }
    }
}

let myCar = new Car ('Mercury', "Sedan", "2010", "white", "125000")

myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.checkService()

console.log(myCar)