export enum Role {
    ADMIN = "ADMIN",
    READ_ONLY = "READ_ONLY",
    AUTHOR = "AUTHOR"
}


export type User = {
    id : number,
    name : string,
    role : Role
}


