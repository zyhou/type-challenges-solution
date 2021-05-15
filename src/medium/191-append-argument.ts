import { Equal, Expect } from '@type-challenges/utils';

// type AppendOneArgument<F, T> = F extends (rest: infer Arguments) => infer Result ? (args: Arguments) => Result : never;

type AppendArgument<F, T> = F extends (...rest: [...infer Arguments]) => infer Result
    ? (...rest: [...Arguments, T]) => Result
    : never;

type Case1 = AppendArgument<(a: number, b: string) => number, boolean>;
type Result1 = (a: number, b: string, x: boolean) => number;

type Case2 = AppendArgument<() => void, undefined>;
type Result2 = (x: undefined) => void;

type Cases = [Expect<Equal<Case1, Result1>>, Expect<Equal<Case2, Result2>>];
