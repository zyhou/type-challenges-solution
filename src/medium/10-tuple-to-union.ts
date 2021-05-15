import { Equal, Expect } from '@type-challenges/utils';

type TupleToUnion<T extends unknown[]> = T[number];

type Cases = [
    Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
    Expect<Equal<TupleToUnion<[123]>, 123>>,
];
