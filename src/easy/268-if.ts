import { Equal, Expect } from '@type-challenges/utils';

type If<C extends boolean, T, F> = C extends true ? T : F;

type Cases = [
    Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
    Expect<Equal<If<false, 'a', 2>, 2>>,
    // @ts-expect-error This type cannot be compile because we extends boolean
    Expect<Equal<If<null, 'a', 'b'>, false>>,
];
