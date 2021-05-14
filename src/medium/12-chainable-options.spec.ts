import { Alike, Expect } from '@type-challenges/utils';

// eslint-disable-next-line @typescript-eslint/ban-types
type Chainable<T = {}> = {
    option<K extends string, V>(key: K, value: V): Chainable<T & Record<K, V>>;
    get(): T;
};

declare const config: Chainable;

describe('12 - Chainable Options', () => {
    it.skip('should be valid', () => {
        type Expected = {
            foo: number;
            bar: {
                value: string;
            };
            name: string;
        };

        const result = config
            .option('foo', 123)
            .option('bar', { value: 'Hello World' })
            .option('name', 'type-challenges')
            .get();

        type Cases = [Expect<Alike<typeof result, Expected>>];

        const cases: Cases = [true];
        expect(cases).toEqual([true]);
    });
});
