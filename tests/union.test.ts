describe('union', function() {
    it('union', function() {
        let name : string | number | boolean = "asep"
        name = "asep"
        expect(name).toBe("asep")
    })



    it('union', function() {
        let value : string | number = 12
        
        
        if(typeof value === "string") {
            console.log(`Selamat malam ${value}`)
        }else if (typeof value === "number") {
            value += 1
            console.log(value)
        }else {
            console.log("Value tidak jelas")
        }



        console.log(value)
        expect(value).toBe(value)
    })
})