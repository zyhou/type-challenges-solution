import { Equal, Expect } from '@type-challenges/utils';

describe('4 - Pick', () => {
    interface Todo {
        title: string;
        description: string;
        completed: boolean;
    }

    interface Expected1 {
        title: string;
    }

    interface Expected2 {
        title: string;
        completed: boolean;
    }

    it('should be valid', () => {
        type MyPick<T, K extends keyof T> = { [P in K]: T[P] };

        type Cases = [
            Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
            Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
            // @ts-expect-error This type cannot be compile
            Expect<Equal<MyPick<Todo, 'title' | 'completed' | 'invalid'>, false>>,
        ];

        const cases: Cases = [true, true, false];
        expect(cases).toEqual([true, true, false]);
    });
});
