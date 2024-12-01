import {AddFunction} from "../src/function-interface"
import { Person } from "../src/person"



describe('function interface ', function() {
    it('function interface ', function() {
        const add : AddFunction = (a : number , b : number) : number => {
            return a + b
        }


        console.log(add(1,2))
    })


    it('should support indexsable interface', function() {
        interface StringArray {
            [index : number] : string
        }

        const name : StringArray = ["asep", "azmi"]
        console.log(name[0])
    })


    it('should support indexsable interface', function() {
        interface StringDictionary {
            [key : string] : string
            
        }


        const user : StringDictionary = {
            name : "asep",
            role : "admin"
        }


        expect(user["name"]).toBe("asep")
        expect(user["role"]).toBe("admin")
    })


    it('should support function interface', function() {
        interface Person {
            name : string;
            sayHello : (name : string) => string
        }


        const person : Person = {
            name : "asep",
            sayHello : (name : string) : string => {
                    return `Hello ${name}`
            }
          }

        


        console.log(person)
    })



    it('should intersection types ', function() {
        interface DataDiri {
            id : number,
            name : string

        }


        interface DataKeluarga {
            kartukeluarga : string,
        }

        type Data = DataDiri & DataKeluarga


        const data : Data = {
            id : 1,
            name : "asep",
            kartukeluarga : "123"
        }


        console.log(data.name)


        expect(data.name).toBe("asep")
        
        
    })



    it('should type assertions', function() {

        const person : any = {
            name : "asep",
            age : 20
        }


        const person2 : Person = person as Person
        person2.name = "azmi"
        
        
    })


    
})