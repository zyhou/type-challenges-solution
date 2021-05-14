import { Equal, Expect } from '@type-challenges/utils';

describe('898 - Includes', () => {
    it('should be valid', () => {
        type Includes<T extends readonly unknown[], U> = U extends T[number] ? true : false;

        type Cases = [
            Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>, true>>,
            Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>, false>>,
            Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,
        ];

        const cases: Cases = [true, true, true];
        expect(cases).toEqual([true, true, true]);
    });
});
