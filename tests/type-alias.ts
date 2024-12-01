import { Category, Product } from "../src/typeAlias";



describe('type alias' , function() {
    it('type alias' , function() {
        const category : Category = {
            name : "asep",
            id : 1
        }


        const product : Product = {
            name : "samsung",
            price : 100000,
            category : category
        }


        console.log(category)
        console.log(product)


        expect(category).toEqual({
            name : "asep",
            id : 1
        })

        expect(product).toEqual({
            name : "samsung",
            price : 100000,
            category : {
                name : "asep",
                id : 1
            }
        })




    })
})