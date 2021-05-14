import { Equal, Expect } from '@type-challenges/utils';

describe('7 - Readonly', () => {
    interface Todo1 {
        title: string;
        description: string;
        completed: boolean;
    }

    it('should be valid', () => {
        type MyReadonly<T> = { readonly [P in keyof T]: T[P] };

        type Cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];

        const cases: Cases = [true];
        expect(cases).toEqual([true]);
    });
});
