import { Equal, Expect } from '@type-challenges/utils';

interface Todo1 {
    title: string;
    description: string;
    completed: boolean;
}

type MyReadonly<T> = { readonly [P in keyof T]: T[P] };

type Cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];
