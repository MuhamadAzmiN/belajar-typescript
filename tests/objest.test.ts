describe('Objest', function() {
    it('Objest', function() {

        const person : {name : string, age : number, hobbies ?: string} = {
            name : "asep",
            age : 20
        }   

        console.log(person)
        


        person.name = "azmi"
        person.age += 1


        console.log(person)


        expect(person).toEqual(person)
    })
})