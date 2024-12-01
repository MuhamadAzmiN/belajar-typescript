"use strict";
describe('optional parameter', function () {
    it('optional', function () {
        function sayHello(name) {
            if (name) {
                console.log(`Hello ${name}`);
                console.log("Hello");
            }
            else {
            }
        }
        sayHello("Azmi");
        const name = undefined;
        sayHello(name);
        sayHello(null);
    });
});
