import { Role } from "../src/enum";
describe('enum', function () {
    it('enum', function () {
        const user = {
            id: 1,
            name: "asep",
            role: Role.ADMIN
        };
        console.log(user);
        expect(user).toEqual({
            id: 1,
            name: "asep",
            role: Role.ADMIN
        });
    });
});
