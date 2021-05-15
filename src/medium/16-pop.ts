import { Equal, Expect } from '@type-challenges/utils';

type Pop<T extends unknown[]> = T extends [...infer Rest, unknown] ? Rest : never;

type Shift<T extends unknown[]> = T extends [unknown, ...infer Rest] ? Rest : never;

type Push<T extends unknown[], U> = U extends unknown[] ? [...T, ...U] : [...T, U];

type Unshift<T extends unknown[], U> = U extends unknown[] ? [...U, ...T] : [U, ...T];

type Cases = [
    Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
    Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,

    Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>,
    Expect<Equal<Shift<['a', 'b', 'c', 'd']>, ['b', 'c', 'd']>>,

    Expect<Equal<Push<[3, 2, 1], 0>, [3, 2, 1, 0]>>,
    Expect<Equal<Push<['a', 'b', 'c', 'd'], 'e'>, ['a', 'b', 'c', 'd', 'e']>>,
    Expect<Equal<Push<[3, 2, 1], [0, -1]>, [3, 2, 1, 0, -1]>>,
    Expect<Equal<Push<['a', 'b', 'c', 'd'], ['e', 'f']>, ['a', 'b', 'c', 'd', 'e', 'f']>>,

    Expect<Equal<Unshift<[3, 2, 1], 0>, [0, 3, 2, 1]>>,
    Expect<Equal<Unshift<['a', 'b', 'c', 'd'], 'e'>, ['e', 'a', 'b', 'c', 'd']>>,
    Expect<Equal<Unshift<[3, 2, 1], [0, -1]>, [0, -1, 3, 2, 1]>>,
    Expect<Equal<Unshift<['a', 'b', 'c', 'd'], ['e', 'f']>, ['e', 'f', 'a', 'b', 'c', 'd']>>,
];
