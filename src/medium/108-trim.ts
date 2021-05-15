import { Equal, Expect } from '@type-challenges/utils';

type Space = ' ' | '\n' | '\t';

type Trim<S extends string> = S extends `${Space}${infer T}`
    ? Trim<T>
    : S extends `${infer T}${Space}`
    ? Trim<T>
    : S;

// Can be write with only one ternary
type BetterTrim<S extends string> = S extends `${Space}${infer T}` | `${infer T}${Space}`
    ? BetterTrim<T>
    : S;

type Cases = [
    Expect<Equal<Trim<'str'>, 'str'>>,
    Expect<Equal<Trim<' str'>, 'str'>>,
    Expect<Equal<Trim<'     str'>, 'str'>>,
    Expect<Equal<Trim<'str   '>, 'str'>>,
    Expect<Equal<Trim<'     str     '>, 'str'>>,
    Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
    Expect<Equal<BetterTrim<'   \n\t foo bar \t'>, 'foo bar'>>,
];
