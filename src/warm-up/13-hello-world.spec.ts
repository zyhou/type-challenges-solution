import { Equal, Expect, NotAny } from '@type-challenges/utils';

describe('13 - Hello World', () => {
    it('should be valid', () => {
        type HelloWorld = string;

        type Cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>];

        const cases: Cases = [true, true];
        expect(cases).toEqual([true, true]);
    });
});
