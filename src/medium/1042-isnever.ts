import { Equal, Expect } from '@type-challenges/utils';

// My first solutionm but the first case doesn't work
// type IsNever<T> = T extends never ? true : false

// https://github.com/microsoft/TypeScript/issues/23182#issuecomment-379091887
// Don't understand why we need to add `[]`...
type IsNever<T> = [T] extends [never] ? true : false;

type Cases = [
    Expect<Equal<IsNever<never>, true>>,
    Expect<Equal<IsNever<never | string>, false>>,
    Expect<Equal<IsNever<''>, false>>,
    Expect<Equal<IsNever<undefined>, false>>,
    Expect<Equal<IsNever<null>, false>>,
    Expect<Equal<IsNever<[]>, false>>,
    Expect<Equal<IsNever<Record<string, never>>, false>>,
];
