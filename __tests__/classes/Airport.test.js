const Airport = require("../../classes/Airport");
const Plane = require("../../classes/Plane");
const Person = require("../../classes/Person");
const Bag = require("../../classes/Bag");

describe("Bag class Test Cases", () => {
	const airport1 = new Airport("Abacus Airport", "ABC");
	test("properties tests", () => {
		expect(airport1.name).toEqual("Abacus Airport");
        
		expect(airport1.getPlanes()).toEqual([]);
		expect(Airport.airportCode()).toEqual([]);
	});
	test("plane methods", () => {
        const plane1 = new Plane("American Blue", "Miami", "New York");

		const person1 = new Person("Jake Hard", "New York");
	});
});
