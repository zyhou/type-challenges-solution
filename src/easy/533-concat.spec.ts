import { Equal, Expect } from '@type-challenges/utils';

describe('533 - Concat', () => {
    it('should be valid', () => {
        type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];

        type Cases = [
            Expect<Equal<Concat<[], []>, []>>,
            Expect<Equal<Concat<[], [1]>, [1]>>,
            Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
            Expect<
                Equal<
                    Concat<['1', 2, '3'], [false, boolean, '4']>,
                    ['1', 2, '3', false, boolean, '4']
                >
            >,
        ];

        const cases: Cases = [true, true, true, true];
        expect(cases).toEqual([true, true, true, true]);
    });
});
