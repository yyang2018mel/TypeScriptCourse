
class ArrayUtils 
{
    static wrapInArray<T>(value: T) 
    {
        return [value];
    }
}

let stringArr = ArrayUtils.wrapInArray('1');
let numberArr = ArrayUtils.wrapInArray(1);