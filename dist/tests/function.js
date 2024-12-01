"use strict";
describe('should function', function () {
    it('should function', function () {
        function sayHello(name) {
            return `Hello ${name}`;
        }
        function sayGoodBye(name) {
            console.log(`Good Bye ${name}`);
        }
        expect(sayGoodBye("Azmi")).toBe("Azmi");
        expect(sayHello("Azmi")).toBe("Hello ");
    });
});



