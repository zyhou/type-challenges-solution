import { Alike, Expect } from '@type-challenges/utils';

interface Todo1 {
    title: string;
    description?: string;
    completed: boolean;
}

interface Todo2 {
    readonly title: string;
    description?: string;
    completed: boolean;
}

interface Expected {
    readonly title: string;
    readonly description?: string;
    completed: boolean;
}

type MyReadonly2<T, K extends keyof T = keyof T> = Readonly<Pick<T, K>> & Omit<T, K>;

type Cases = [
    Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
    Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
    Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>,
];
