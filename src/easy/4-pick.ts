import { Equal, Expect } from '@type-challenges/utils';

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

type MyPick<T, K extends keyof T> = { [P in K]: T[P] };

type Cases = [
    Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
    Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
    // @ts-expect-error This type cannot be compile
    Expect<Equal<MyPick<Todo, 'title' | 'completed' | 'invalid'>, false>>,
];
