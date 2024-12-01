describe('optional parameter' , function() {
    

    it('optional' , function() {

        function sayHello (name ? : string | null | undefined){
            if(name) {
                console.log(`Hello ${name}`)
                console.log("Hello")
            }else {
            }
        
        
        
        }


        




        sayHello("Azmi")

        const name : string | undefined  = undefined

        sayHello(name)
        sayHello(null)

    })
})