
function echo<T>(arg: T) 
{
    return arg;
}

function printName<T extends { name: string }> (obj: T)
{
    console.log(obj.name);
}

class Entity<TId>
{
    constructor(public Id: TId) 
    {    
    }
}

interface User
{
    userId: number,
    username: string;
}

let keys: keyof User = 'userId'