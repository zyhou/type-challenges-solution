import { Equal, Expect } from '@type-challenges/utils';

describe('15 - Last of Array', () => {
    it('should be valid', () => {
        type Last<T extends unknown[]> = T extends [...infer _, infer Last] ? Last : never;

        type Cases = [
            Expect<Equal<Last<[3, 2, 1]>, 1>>,
            Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
        ];

        const cases: Cases = [true, true];
        expect(cases).toEqual([true, true]);
    });
});
