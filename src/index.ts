
class KeyValuePair<K, V>
{
    constructor(public key: K, public value: V) 
    { }
}

let pair = new KeyValuePair<string, string>('1', 'a');
let infer = new KeyValuePair('1', 'a');