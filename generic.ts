const ArrayOfNumbers: Array<number> = [1,1,2,3,5];
const ArrayOfString: Array<string> = ["1","1","2","3","5"];

function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

reverse(ArrayOfNumbers)
reverse(ArrayOfString)