import { Equal, Expect } from '@type-challenges/utils';

type Includes<T extends readonly unknown[], U> = U extends T[number] ? true : false;

type Cases = [
    Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>, true>>,
    Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>, false>>,
    Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,
];
