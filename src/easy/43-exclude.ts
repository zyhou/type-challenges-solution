import { Equal, Expect } from '@type-challenges/utils';

type MyExclude<T, U> = T extends U ? never : T;

type Cases = [
    Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, Exclude<'a' | 'b' | 'c', 'a'>>>,
    Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, Exclude<'a' | 'b' | 'c', 'a' | 'b'>>>,
    Expect<
        Equal<
            MyExclude<string | number | (() => void), () => void>,
            Exclude<string | number | (() => void), () => void>
        >
    >,
];
