import { Equal, Expect } from '@type-challenges/utils';

type First<T extends unknown[]> = T extends [] ? never : T[0];

type Cases = [
    Expect<Equal<First<[3, 2, 1]>, 3>>,
    Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
    Expect<Equal<First<[]>, never>>,
    Expect<Equal<First<[undefined]>, undefined>>,
];
