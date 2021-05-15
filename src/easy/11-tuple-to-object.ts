import { Equal, Expect } from '@type-challenges/utils';

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

type TupleToObject<T extends readonly string[]> = { [P in T[number]]: P };

type Cases = [
    Expect<
        Equal<
            TupleToObject<typeof tuple>,
            {
                tesla: 'tesla';
                'model 3': 'model 3';
                'model X': 'model X';
                'model Y': 'model Y';
            }
        >
    >,
];
