
interface Product 
{
    name: string;
    price: number;
}

class Store<T> 
{
    protected _objects: T[] = [];

    add(obj: T): void
    {
        this._objects.push(obj);
    }

    find(property: keyof T, value: unknown) : T | undefined
    {
        return this._objects.find(o => o[property] === value);
    }
}

let store = new Store<Product>();
store.add({ name: 'a', price: 1 });
store.find('name', 'a');
store.find('price', 1);
store.find('nonExistingProperty', 1);

// Pass on the generic type parameter
class CompressibleStore<T> extends Store<T>
{
    compress() : void
    {

    }
}

// Restricting the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T>
{
    find(name: string) : T | undefined
    {
        return this._objects.find(o => o.name === name);
    }
}

// Fix the generic type parameter
class ProductStore extends Store<Product>
{
    filterByCategory(_category: string) : Product[]
    {
        return [];
    }
}