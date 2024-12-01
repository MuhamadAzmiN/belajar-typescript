"use strict";
describe('union', function () {
    it('union', function () {
        let name = "asep";
        name = "asep";
        expect(name).toBe("asep");
    });
    it('union', function () {
        let value = 12;
        if (typeof value === "string") {
            console.log(`Selamat malam ${value}`);
        }
        else if (typeof value === "number") {
            value += 1;
            console.log(value);
        }
        else {
            console.log("Value tidak jelas");
        }
        console.log(value);
        expect(value).toBe(value);
    });
});
