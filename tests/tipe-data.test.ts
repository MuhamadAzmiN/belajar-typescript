describe('tipe data' , function() {
    it('hello' , function() {
        const name : string = "Muhamad Azmi Naziyulloh"
        const umur : number = 20
        const isVip : boolean = true
        expect(name).toBe("Muhamad Azmi Naziyulloh")
        expect(umur).toBe(20)
        expect(isVip).toBe(true)
    })
})