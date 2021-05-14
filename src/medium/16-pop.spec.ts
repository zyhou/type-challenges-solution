import { Equal, Expect } from '@type-challenges/utils';

describe('16 - Pop', () => {
    it('should be valid', () => {
        type Pop<T extends unknown[]> = T extends [...infer Rest, infer _] ? Rest : never;

        type Cases = [
            Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
            Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
        ];

        const cases: Cases = [true, true];
        expect(cases).toEqual([true, true]);
    });
});
