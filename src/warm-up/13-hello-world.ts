import { Equal, Expect, NotAny } from '@type-challenges/utils';

type HelloWorld = string;

type Cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>];
