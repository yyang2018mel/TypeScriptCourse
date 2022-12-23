
interface Result<T>
{
    data: T | null,
    error: string | null
}

function fetch<T>(url: string) : Result<T>
{
    return {data: null, error: null};
}

interface User 
{
    usrname: string;
}

interface Product
{
    title: string;
}

let result = fetch<User>('url');
let result2 = fetch<Product>('url');