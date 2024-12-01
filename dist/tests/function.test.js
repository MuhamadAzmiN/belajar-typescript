"use strict";
describe('should function', function () {
    it('should function', function () {
        function sayHello(name) {
            return `${name}`;
        }
        expect(sayHello("Azmi")).toBe("Azmi");
        function sayGoodBye(name) {
            console.log(`${name}`);
        }
        expect(sayGoodBye("Azmi")).toBe(undefined);
    });
    it('function paramater', () => {
        function buahKu(name = "apel") {
            return `${name}`;
        }
        const buah = buahKu("anggur");
        expect(buah).toBe("anggur");
    });
    it('function sum', function () {
        function sum(...values) {
            let total = 0;
            for (let value of values) {
                total += value;
            }
            return total;
        }
        const total = sum(1, 2, 3, 4, 5);
        expect(total).toBe(15);
    });
    it('test', () => {
        function sayHello(...name) {
            return `${name}`;
        }
        const result = sayHello("Azmi", "Asep", "hai", "naby");
        expect(result).toBe("Azmi,Asep,hai,naby");
    });
    it('should support optional parameter ', function () {
        function dataDiri(name, age) {
            return `${name} ${age}`;
        }
        const result = dataDiri("asep", 20);
        expect(result).toBe("asep 20");
    });
    it('function overloading', function () {
        function callMe(value) {
            if (typeof value === "string") {
                return value.toLocaleUpperCase();
            }
            else if (typeof value === "number") {
                return value * 10;
            }
        }
        expect(callMe("Azmi")).toBe("AZMI");
        expect(callMe(10)).toBe(100);
    });
    it('function parameter ', () => {
        function sayHello(name, filter) {
            return `Hello ${filter(name)}`;
        }
        // function toUpper(name : string) : string {
        //     return name.toLocaleLowerCase()
        // }
        // expect(sayHello("Azmi", toUpper)).toBe("Hello AZMI")
        // expect(sayHello("Azmi", function(name : string) : string { return name.toLocaleLowerCase()} )).toBe("Hello azmi")
        // arraw function
        expect(sayHello("Azmi", name => name.toLocaleLowerCase())).toBe("Hello azmi");
    });
});
