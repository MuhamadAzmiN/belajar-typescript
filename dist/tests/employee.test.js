describe('employee', function () {
    it('employee', function () {
        const employee = {
            id: 1,
            name: "asep",
            division: "IT"
        };
        const manager = {
            id: 1,
            name: "asep",
            division: "IT",
            numberOfEmployees: 10
        };
        console.log(employee);
        console.log(manager);
        expect(employee.name).toBe("asep");
    });
});
export {};
