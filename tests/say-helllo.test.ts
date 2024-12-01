import { sayHello } from "../src/say-hello";


describe('say hello' , function() {
    it('hello' , function() {
        const nama  = sayHello("Azmi")
        expect(nama).toBe("Hello Azmi")
    })
})