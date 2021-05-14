import { Equal, Expect } from '@type-challenges/utils';

describe('189 - Awaited', () => {
    it('should be valid', () => {
        type Awaited<T> = T extends Promise<infer U> ? U : T;

        type X = Promise<string>;
        type Y = Promise<{ field: number }>;

        type Cases = [
            Expect<Equal<Awaited<X>, string>>,
            Expect<Equal<Awaited<Y>, { field: number }>>,
        ];

        const cases: Cases = [true, true];
        expect(cases).toEqual([true, true]);
    });
});
