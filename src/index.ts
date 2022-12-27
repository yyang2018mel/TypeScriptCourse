
function Log(target: any, methodName: string, descriptor: PropertyDescriptor)
{
    const original = descriptor.value as Function;
    descriptor.value = function (...args: any) {
        console.log('Before');
        original.call(this, ...args);
        console.log('After')
    }
}

class Person
{
    @Log
    say(message: string)
    {
        console.log(message);
    }
}

let p = new Person();
p.say("Hello!");