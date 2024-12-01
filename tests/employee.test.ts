import { Employee, Manager } from "../src/employee";


describe('employee' , function() {
    it('employee' , function() {
        const employee : Employee = {
            id : 1,
            name : "asep",
            division : "IT"
        }


        const manager : Manager = {
            id : 1,
            name : "asep",
            division : "IT",
            numberOfEmployees : 10
        }



        console.log(employee)
        console.log(manager)

        expect(employee.name).toBe("asep")

    })
})