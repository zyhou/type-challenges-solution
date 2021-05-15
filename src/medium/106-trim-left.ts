import { Equal, Expect } from '@type-challenges/utils';

type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer T}` ? TrimLeft<T> : S;

type Cases = [
    Expect<Equal<TrimLeft<'str'>, 'str'>>,
    Expect<Equal<TrimLeft<' str'>, 'str'>>,
    Expect<Equal<TrimLeft<'     str'>, 'str'>>,
    Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
    Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>,
];
