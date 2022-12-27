
interface Product 
{
    name: string;
    price: number;
}

type ReadOnly<T> = 
{
    // Index signature
    // keyof
    readonly [Property in keyof T]: T[Property]
}

type Optional<T> = 
{
    [Property in keyof T]?: T[Property]
}

type Nullable<T> = 
{
    [Property in keyof T]: T[Property] | null
}

let product: ReadOnly<Product> = 
{
    name: 'a',
    price: 1
};

product.name = 'a';