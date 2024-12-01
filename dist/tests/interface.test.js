describe('interface', function () {
    it('interface', function () {
        const user = {
            id: 1,
            name: "asep",
            role: "admin",
            About: "asep",
            nis: 124,
            nisn: 123
        };
        user.name = "azmi";
        console.log(user);
        expect(user).toEqual({
            id: 1,
            name: "azmi",
            role: "admin",
            About: "asep",
            nis: 124,
            nisn: 123
        });
    });
});
export {};
