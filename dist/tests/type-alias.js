describe('type alias', function () {
    it('type alias', function () {
        const category = {
            name: "asep",
            id: 1
        };
        const product = {
            name: "samsung",
            price: 100000,
            category: category
        };
        console.log(category);
        console.log(product);
        expect(category).toEqual({
            name: "asep",
            id: 1
        });
        expect(product).toEqual({
            name: "samsung",
            price: 100000,
            category: {
                name: "asep",
                id: 1
            }
        });
    });
});
export {};
