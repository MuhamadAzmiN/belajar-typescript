"use strict";
describe('tipe data array', () => {
    it('aray', () => {
        const name = ["asep", "azmi", 1, 2];
        console.log(name);
        expect(name).toEqual(["asep", "azmi", 1, 2]);
    });
    it('readonly', () => {
        const nama = ["asep", "azmi"];
        // nama[0] = "asep di ubah"
        console.log(nama[0]);
        expect(nama[0]).toBe("asep");
    });
    it('tuple', () => {
        const name = ["asep", 1];
        console.log(name);
        expect(name).toEqual(["asep", 1]);
    });
});
