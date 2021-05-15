import { Equal, Expect } from '@type-challenges/utils';

type Pop<T extends unknown[]> = T extends [...infer Rest, infer _] ? Rest : never;

type Cases = [
    Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
    Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
];
