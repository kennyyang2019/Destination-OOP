const Plane = require("../../classes/Plane");
const Person = require("../../classes/Person");
const Bag = require("../../classes/Bag");

describe("Bag class Test Cases", () => {
	const plane1 = new Plane("American Blue", "Miami", "New York");
	test("name and destination tests", () => {
		expect(plane1.company).toBe("American Blue");
		expect(plane1.origin).toBe("Miami");
		expect(plane1.destination).toBe("New York");
	});
	test("plane methods", () => {
		const person1 = new Person("Jake Hard", "New York");
		expect(plane1.getPassengers()).toEqual([]);
		plane1.addPassenger(person1);
		expect(plane1.getPassengers().length).toEqual(1);
		expect(plane1.getPassengers()[0]).toEqual(person1);
	});
});
