"use strict";
describe('Objest', function () {
    it('Objest', function () {
        const person = {
            name: "asep",
            age: 20
        };
        console.log(person);
        person.name = "azmi";
        person.age += 1;
        console.log(person);
        expect(person).toEqual(person);
    });
});
