import { Equal, Expect } from '@type-challenges/utils';

type Capitalize<S extends string> = S extends `${infer First}${infer Rest}`
    ? `${Uppercase<First>}${Rest}`
    : S;

type Cases = [
    Expect<Equal<Capitalize<'foobar'>, 'Foobar'>>,
    Expect<Equal<Capitalize<'FOOBAR'>, 'FOOBAR'>>,
    Expect<Equal<Capitalize<'foo bar'>, 'Foo bar'>>,
    Expect<Equal<Capitalize<''>, ''>>,
];
