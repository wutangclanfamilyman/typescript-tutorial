interface Person {
    name: string,
    age: number
}

type PersonKeys = keyof Person // name | age

let myName: PersonKeys = 'name'
myName = 'age'

// myName = 'job' // Error

type User = {
    _id: number
    name: string,
    email: string,
    createdAt: Date
}

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> // 'name' | 'email'
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // 'name' | 'email'


const u1: UserKeysNoMeta1 = 'name'
// const u2: UserKeysNoMeta1 = '_id' // error