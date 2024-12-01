
export type ID = string | number


export type Category = {
    id : ID
    name : string,
    description ?: string

}

export type Product = {
    name : string,
    price : number
    category : Category,
    description ?: string
}