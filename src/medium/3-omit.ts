import { Equal, Expect } from '@type-challenges/utils';

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

type MyOmit<T, K extends keyof T> = { [P in Exclude<keyof T, K>]: T[P] };

type Cases = [
    Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
    Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
];
