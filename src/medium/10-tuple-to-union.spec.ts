import { Equal, Expect } from '@type-challenges/utils';

describe('10 - Tuple to Union', () => {
    it('should be valid', () => {
        type TupleToUnion<T extends unknown[]> = T[number];

        type Cases = [
            Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
            Expect<Equal<TupleToUnion<[123]>, 123>>,
        ];

        const cases: Cases = [true, true];
        expect(cases).toEqual([true, true]);
    });
});
