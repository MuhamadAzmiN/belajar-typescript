// import { Role } from "../src/enum";
import { User } from "../src/interface";

describe('interface' , function() {
    it('interface' , function() {
        const user : User = {
            id : 1,
            name : "asep",
            role : "admin",
            About : "asep",
            nis : 124,
            nisn : 123
        }


        user.name = "azmi"
        

        console.log(user)
        expect(user).toEqual({
            id : 1,
            name : "azmi",
            role : "admin",
            About : "asep",
            nis : 124,
            nisn : 123
        })
    })
})