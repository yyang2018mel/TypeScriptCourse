class Logger
{
    private _fileName: string;

    constructor(fileName: string) 
    {
        this._fileName = fileName;
    }

    Log() : void
    {
        console.log('Logging to ' + this._fileName);
    }
}

class Person
{
    constructor(public firstName: string, public lastName: string) 
    {
    }

    get fullName()
    {
        return this.firstName + ' ' + this.lastName;
    }
}

class Employee extends Person
{
    constructor(firstName: string, lastName: string, public salary: number) 
    {
        super(firstName, lastName);    
    }
}

type Address = 
{
    street: string,
    city: string,
    zipCode: number
};

interface IEmployee
{
    name: string,
    salary: number,
    address: Address
};