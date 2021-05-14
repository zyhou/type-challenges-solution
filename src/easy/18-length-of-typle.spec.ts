import { Equal, Expect } from '@type-challenges/utils';

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const;
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const;

describe('18 - Length of Tuple', () => {
    it('should be valid', () => {
        type Length<T extends { length: number }> = T['length'];

        type Cases = [
            Expect<Equal<Length<typeof tesla>, 4>>,
            Expect<Equal<Length<typeof spaceX>, 5>>,
        ];

        const cases: Cases = [true, true];
        expect(cases).toEqual([true, true]);
    });
});
