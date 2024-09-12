class Plane {
	#passengers;
	constructor(company, origin, destination) {
		this.company = company;
		this.origin = origin;
		this.destination = destination;
		this.#passengers = [];
	}
	addPassenger(person) {
		this.#passengers.push(person);
	}
	getPassengers() {
		return this.#passengers;
	}
}

module.exports = Plane;
