const Bag = require("../../classes/Bag");
const Person = require("../../classes/Person");

describe("Bag class Test Cases", ()=>{
    const bag1 = new Bag(15, 1)
    test("to see if weight and id are assign properly", ()=>{
        expect(bag1.weight).toBe(15);
        expect(bag1.id).toBe(1);
    })
    test("owner tests", () => {
        const person1 = new Person("Jake Hard", "New York");

        expect(bag1.getOwner()).toEqual(null);
        bag1.assignOwner(person1);
        expect(bag1.getOwner().name).toEqual("Jake Hard");

    })
})