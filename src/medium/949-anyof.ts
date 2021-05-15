import { Equal, Expect } from '@type-challenges/utils';

type AnyOf<T extends readonly unknown[]> = T[number] extends
    | false
    | 0
    | []
    | ''
    | Record<string, never>
    ? false
    : true;

// {} = Record<string, never>
type Cases = [
    Expect<Equal<AnyOf<[1, 'test', true, [1], { name: 'test' }, { 1: 'test' }]>, true>>,
    Expect<Equal<AnyOf<[1, '', false, [], Record<string, never>]>, true>>,
    Expect<Equal<AnyOf<[0, 'test', false, [], Record<string, never>]>, true>>,
    Expect<Equal<AnyOf<[0, '', true, [], Record<string, never>]>, true>>,
    Expect<Equal<AnyOf<[0, '', false, [1], Record<string, never>]>, true>>,
    Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }]>, true>>,
    Expect<Equal<AnyOf<[0, '', false, [], { 1: 'test' }]>, true>>,
    Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }, { 1: 'test' }]>, true>>,
    Expect<Equal<AnyOf<[0, '', false, [], Record<string, never>]>, false>>,
    Expect<Equal<AnyOf<[]>, false>>,
];
