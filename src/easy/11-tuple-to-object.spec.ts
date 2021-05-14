import { Equal, Expect } from '@type-challenges/utils';

describe('11 - Tuple To Object', () => {
    const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

    it('should be valid', () => {
        type TupleToObject<T extends readonly string[]> = { [P in T[number]]: P };

        type Cases = [
            Expect<
                Equal<
                    TupleToObject<typeof tuple>,
                    {
                        tesla: 'tesla';
                        'model 3': 'model 3';
                        'model X': 'model X';
                        'model Y': 'model Y';
                    }
                >
            >,
        ];

        const cases: Cases = [true];
        expect(cases).toEqual([true]);
    });
});
