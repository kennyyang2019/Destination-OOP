const Person = require("../../classes/Person");
const Bag = require("../../classes/Bag");

describe("Bag class Test Cases", () => {
	const person1 = new Person("Jake Hard", "New York");
	test("to see if an instance of Person class was created ", () => {
		expect(person1).toBeInstanceOf(Person);
	});
	test("name and destination tests", () => {
		expect(person1.name).toBe("Jake Hard");
		expect(person1.destination).toBe("New York");
	});
	test("bag prop and method tests", () => {
        const bag1 = new Bag(15, 1)

		expect(person1.getBags()).toEqual([]);
        person1.addBag(bag1);
		expect(person1.getBags()[0]).toBe(bag1)
	});
});