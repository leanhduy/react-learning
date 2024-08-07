import { beforeEach, describe, expect, test } from 'vitest'
import {
    cycle,
    isBoolean,
    isNull,
    isNumber,
    isString,
    isSymbol,
    isUndefined,
    makeCounter,
    mean,
    minBy,
    Stack,
} from '../practice'

//#region minBy
describe('minBy', () => {
    test('empty input array', () => {
        expect(minBy([], () => {})).toEqual(undefined)
    })

    test('one element', () => {
        expect(minBy([{ n: 1 }], (o) => o.n)).toEqual({ n: 1 })
    })

    test('one element - object', () => {
        expect(minBy([{ n: 1 }], (o) => o.n)).toEqual({ n: 1 })
    })

    test('one element - primitive', () => {
        expect(minBy([100], (o) => o)).toEqual(100)
        expect(minBy(['apple'], (o) => o)).toEqual('apple')
    })

    test('two elements - objects', () => {
        expect(minBy([{ n: 1 }, { n: 2 }], (o) => o.n)).toEqual({ n: 1 })
        expect(
            minBy(
                [{ data: { score: 20 } }, { data: { score: 10 } }],
                (o) => o.data.score
            )
        ).toEqual({ data: { score: 10 } })
    })

    test('two elements - primitive', () => {
        expect(minBy([1, -2, 100, -5], (o) => o)).toEqual(-5)
        expect(minBy(['apple', 'ali', 'abba'], (o) => o)).toEqual('abba')
    })

    test('multiple elements - sprase objects', () => {
        expect(
            minBy([{ m: 1, n: 2 }, { n: 10 }, { m: -1 }], (o) => o.m)
        ).toEqual({ m: -1 })
    })
})
//#endregion

//#region Stack
describe('Stack', () => {
    let s
    beforeEach(() => {
        s = new Stack()
    })
    test('constructor', () => {
        expect(s instanceof Stack)
    })

    test('push()', () => {
        expect(s.push(100)).toBe(1)
        expect(s.push(200)).toBe(2)
    })

    test('pop()', () => {
        s.push(100)
        s.push(200)
        expect(s.pop()).toBe(200)
        expect(s.pop()).toBe(100)
        expect(s.pop()).toBe(undefined)
    })

    test('isEmpty', () => {
        expect(s.isEmpty()).toBe(true)
        s.push(100)
        expect(s.isEmpty()).toBe(false)
    })

    test('peek', () => {
        expect(s.peek()).toBeUndefined()
        s.push(100)
        s.push(200)
        expect(s.peek()).toBe(200)
    })

    test('length', () => {
        expect(s.length()).toBe(0)
        s.push(1)
        expect(s.length()).toBe(1)
        s.push(1)
        expect(s.length()).toBe(2)
    })
})
//#endregion

//#region Type utilities
describe('type-utilities', () => {
    test('isBoolean', () => {
        expect(isBoolean(true)).toBe(true)
        expect(isBoolean(false)).toBe(true)
        expect(isBoolean('hello')).toBe(false)
        expect(isBoolean(1)).toBe(false)
        expect(isBoolean({})).toBe(false)
    })

    test('isNumber', () => {
        expect(isNumber(1)).toBe(true)
        expect(isNumber(NaN)).toBe(true)
        expect(isNumber('hello')).toBe(false)
        expect(isNumber(true)).toBe(false)
        expect(isNumber({ a: 1 })).toBe(false)
        expect(isNumber([1, 2])).toBe(false)
        expect(isNumber(Symbol('1'))).toBe(false)
    })

    test('isNull', () => {
        expect(isNull(null)).toBe(true)
        expect(isNull(1)).toBe(false)
        expect(isNull('hello')).toBe(false)
        expect(isNull(true)).toBe(false)
    })

    test('isString', () => {
        expect(isString('hello')).toBe(true)
        expect(isString(1)).toBe(false)
        expect(isString(true)).toBe(false)
        expect(isString({ a: 1 })).toBe(false)
    })

    test('isSymbol', () => {
        expect(isSymbol(Symbol('hello'))).toBe(true)
        expect(isSymbol(1)).toBe(false)
        expect(isSymbol('hello')).toBe(false)
        expect(isSymbol(true)).toBe(false)
        expect(isSymbol({ a: 1 })).toBe(false)
    })

    test('isUndefined', () => {
        expect(isUndefined(undefined)).toBe(true)
        expect(isUndefined(null)).toBe(false)
        expect(isUndefined(1)).toBe(false)
    })
})
//#endregion

//#region Make Counter
describe('makeCounter', () => {
    test('returns a function', () => {
        const counter = makeCounter()
        expect(counter).toBeInstanceOf(Function)
    })

    test('return default value', () => {
        const counter = makeCounter()
        expect(counter()).toBe(0)
    })

    test('increments', () => {
        const counter = makeCounter()
        expect(counter()).toBe(0)
        expect(counter()).toBe(1)
        expect(counter()).toBe(2)
    })

    test('increments', () => {
        const counter = makeCounter(100)
        expect(counter()).toBe(100)
        expect(counter()).toBe(101)
        expect(counter()).toBe(102)
    })
})

//#endregion

//#region Mean
describe('mean', () => {
    test('empty input array', () => {
        expect(mean([])).toBeNaN()
    })

    test('single value', () => {
        expect(mean([0])).toEqual(0)
    })

    test('two values', () => {
        expect(mean([1, 3])).toEqual(2)
    })
})
//#endregion

//#region Cycle
describe('cycle', () => {
    test('returns function', () => {
        const fooFn = cycle('foo')
        expect(fooFn).toBeInstanceOf(Function)
    })

    test('single item', () => {
        const helloFn = cycle('hello')
        expect(helloFn()).toBe('hello')
    })

    test('two values', () => {
        const onOffFn = cycle('on', 'off')
        expect(onOffFn()).toBe('on')
        expect(onOffFn()).toBe('off')
    })

    test('three values', () => {
        const speedFn = cycle('slow', 'medium', 'fast')
        expect(speedFn()).toBe('slow')
        expect(speedFn()).toBe('medium')
        expect(speedFn()).toBe('fast')
    })

    test('wraps around', () => {
        const speedFn = cycle('slow', 'medium', 'fast')
        expect(speedFn()).toBe('slow')
        expect(speedFn()).toBe('medium')
        expect(speedFn()).toBe('fast')
        expect(speedFn()).toBe('slow')
        expect(speedFn()).toBe('medium')
        expect(speedFn()).toBe('fast')
    })
})
//#endregion
