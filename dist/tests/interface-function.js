describe('function interface ', function () {
    it('function interface ', function () {
        const add = (a, b) => {
            return a + b;
        };
        console.log(add(1, 2));
    });
    it('should support indexsable interface', function () {
        const name = ["asep", "azmi"];
        console.log(name[0]);
    });
    it('should support indexsable interface', function () {
        const user = {
            name: "asep",
            role: "admin"
        };
        expect(user["name"]).toBe("asep");
        expect(user["role"]).toBe("admin");
    });
    it('should support function interface', function () {
        const person = {
            name: "asep",
            sayHello: (name) => {
                return `Hello ${name}`;
            }
        };
        console.log(person);
    });
    it('should intersection types ', function () {
        const data = {
            id: 1,
            name: "asep",
            kartukeluarga: "123"
        };
        console.log(data.name);
        expect(data.name).toBe("asep");
    });
    it('should type assertions', function () {
        const person = {
            name: "asep",
            age: 20
        };
        const person2 = person;
        person2.name = "azmi";
    });
});
export {};
