import { Equal, Expect } from '@type-challenges/utils';

type X = {
    a: () => 22;
    b: string;
    c: {
        d: boolean;
        e: {
            g: {
                h: {
                    i: true;
                    j: 'string';
                };
                k: 'hello';
            };
        };
    };
};

type Expected = {
    readonly a: () => 22;
    readonly b: string;
    readonly c: {
        readonly d: boolean;
        readonly e: {
            readonly g: {
                readonly h: {
                    readonly i: true;
                    readonly j: 'string';
                };
                readonly k: 'hello';
            };
        };
    };
};

type DeepReadonly<T> = keyof T extends never ? T : { readonly [P in keyof T]: DeepReadonly<T[P]> };

type Cases = [Expect<Equal<DeepReadonly<X>, Expected>>];
