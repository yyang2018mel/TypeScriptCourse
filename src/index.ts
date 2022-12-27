


function MinLength(length: number) {

    return (target: any, propertyName: string) => {

        let value: string;
        const descriptor : PropertyDescriptor = {

            set(newValue: string)
            {
                if (newValue.length < length)
                    throw new Error(`Property should be at least ${length} chars`);
                value = newValue;
            },

            get() {return value;}
        } 

        Object.defineProperty(target, propertyName, descriptor);
    };
}

class User
{
    @MinLength(4)
    password: string;

    constructor(password: string)
    {
        this.password = password;
    }
}

let user = new User('124');

console.log(user.password);