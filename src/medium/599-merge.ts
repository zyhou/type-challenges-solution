import { Equal, Expect } from '@type-challenges/utils';

type Merge<F, S> = {
    [P in keyof F | keyof S]: P extends keyof S ? S[P] : P extends keyof F ? F[P] : never;
};

type Foo = {
    a: number;
    b: string;
};
type Bar = {
    b: number;
};

type Cases = [
    Expect<
        Equal<
            Merge<Foo, Bar>,
            {
                a: number;
                b: number;
            }
        >
    >,
];
