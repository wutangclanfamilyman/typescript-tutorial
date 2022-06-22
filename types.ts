const message: string = 'Hello world';
const isFetching: boolean = false; // true

const integer: number = 42;
const float: number = 3.2;
const num: number = 3e10;

const numberArray: number[] = [1,1,2,3,5,8,13];
const numberArray2: Array<number> = [1,1,2,3,5,8,13];

const words: string[] = ['Hello', 'ts'];

// Tuple

const contact: [string, number] = ['Vlad', 12345069];

// Any

let variable: any = 42;
variable = 'New string';
variable = [];

// Func
function sayMyName(name: string): void {
    console.log(name);
}
sayMyName('Vlad');

// Never

function throwError(message: string): never { // Never
    throw new Error(message);
}

function infinite() {
    while(true) {

    }
}

// Type

type Login = string

const login: Login = 'admin';
// const login2: Login = 2; not working

type ID = string | number; // String or Number
const id1: ID = 1234;
const id2: ID = 'text';
// const id3: ID =  false; // Error

// Null and undefined

type SomeType = string | null | undefined;
