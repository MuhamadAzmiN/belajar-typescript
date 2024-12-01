import { Role, User } from "../src/enum";







describe('enum' , function() {
    it('enum' , function() {
        const user : User = {
            id : 1,
            name : "asep",
            role : Role.ADMIN
        }


        console.log(user)


        expect(user).toEqual({
            id : 1,
            name : "asep",
            role : Role.ADMIN
        })



    })
})