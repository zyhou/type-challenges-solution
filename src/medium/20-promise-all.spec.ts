import { Equal, Expect } from '@type-challenges/utils';

declare function PromiseAll<T extends unknown[]>(
    values: readonly [...T],
): Promise<{ [P in keyof T]: T[P] extends Promise<infer R> ? R : T[P] }>;

describe('20 - Promise.all', () => {
    it.skip('should be valid', () => {
        const promiseAllTest1 = PromiseAll([1, 2, 3] as const);
        const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const);
        const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)]);

        type Cases = [
            Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
            Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
            Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>,
        ];

        const cases: Cases = [true, true, true];
        expect(cases).toEqual([true, true, true]);
    });
});
