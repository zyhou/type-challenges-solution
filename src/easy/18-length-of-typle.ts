import { Equal, Expect } from '@type-challenges/utils';

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const;
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const;

type Length<T extends { length: number }> = T['length'];

type Cases = [Expect<Equal<Length<typeof tesla>, 4>>, Expect<Equal<Length<typeof spaceX>, 5>>];
