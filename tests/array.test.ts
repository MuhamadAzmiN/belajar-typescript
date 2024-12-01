describe('tipe data array' , () => {
    it('aray', () => {
        const name : any[] = ["asep", "azmi",1 ,2]
        console.log(name)
        expect(name).toEqual(["asep", "azmi", 1,2 ])

    })



    it('readonly', () => {
        const nama : readonly string[] = ["asep", "azmi"]
        // nama[0] = "asep di ubah"
        console.log(nama[0])
        expect(nama[0]).toBe("asep")

    })



    it('tuple', () => { 
        const name : readonly [String, Number] = ["asep", 1]
        console.log(name)
        expect(name).toEqual(["asep", 1])
    })

    

})