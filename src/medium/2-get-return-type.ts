import { Equal, Expect } from '@type-challenges/utils';

type ComplexObject = {
    a: [12, 'foo'];
    bar: 'hello';
    prev(): number;
};

const function_ = (v: boolean) => (v ? 1 : 2);
const function1 = (v: boolean, _: unknown) => (v ? 1 : 2);

type MyReturnType<T> = T extends (...rest: never) => infer R ? R : T;

type Cases = [
    Expect<Equal<string, MyReturnType<() => string>>>,
    Expect<Equal<123, MyReturnType<() => 123>>>,
    Expect<Equal<ComplexObject, MyReturnType<() => ComplexObject>>>,
    Expect<Equal<Promise<boolean>, MyReturnType<() => Promise<boolean>>>>,
    Expect<Equal<() => 'foo', MyReturnType<() => () => 'foo'>>>,
    Expect<Equal<1 | 2, MyReturnType<typeof function_>>>,
    Expect<Equal<1 | 2, MyReturnType<typeof function1>>>,
];
