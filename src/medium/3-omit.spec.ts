import { Equal, Expect } from '@type-challenges/utils';

describe('2 - Get Return Type', () => {
    interface Todo {
        title: string;
        description: string;
        completed: boolean;
    }

    interface Expected1 {
        title: string;
        completed: boolean;
    }

    interface Expected2 {
        title: string;
    }

    it('should be valid', () => {
        type MyOmit<T, K extends keyof T> = { [P in Exclude<keyof T, K>]: T[P] };

        type Cases = [
            Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
            Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
        ];

        const cases: Cases = [true, true];
        expect(cases).toEqual([true, true]);
    });
});
