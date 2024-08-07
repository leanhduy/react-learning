//#region minBy()
/**
 * Find the element inside an array `arr` with the minimum value after going through `iteratee`
 * Given a
 * @param {Array} arr: The array to iterate over
 * @param {function} iteratee: The iteratee invoked per element, which is a function that accepts one argument (value)
 * @returns {*} the minimum value
 */
export const minBy = (arr, iteratee) => {
    throw 'Not implemented'
}
//#endregion

//#region Implement a Stack
export class Stack {
    constructor() {
        throw 'Not implemented!'
    }

    /**
     * Pushes an item onto the top of the stack.
     * @param {*} item The item to be pushed onto the stack.
     * @return {number} The new length of the stack.
     */
    push(item) {
        throw 'Not implemented!'
    }

    /**
     * Remove an item at the top of the stack.
     * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
     */
    pop() {
        throw 'Not implemented!'
    }

    /**
     * Determines if the stack is empty.
     * @return {boolean} `true` if the stack has no items, `false` otherwise.
     */
    isEmpty() {
        throw 'Not implemented!'
    }

    /**
     * Returns the item at the top of the stack without removing it from the stack.
     * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
     */
    peek() {
        throw 'Not implemented!'
    }

    /**
     * Returns the number of items in the stack.
     * @return {number} The number of items in the stack.
     */
    length() {
        throw 'Not implemented!'
    }
}
//#endregion

//#region Type utilities
export function isBoolean(value) {
    throw 'Not implemented'
}

export function isNumber(value) {
    throw 'Not implemented'
}

export function isNull(value) {
    throw 'Not implemented'
}

export function isString(value) {
    throw 'Not implemented'
}

export function isSymbol(value) {
    throw 'Not implemented'
}

export function isUndefined(value) {
    throw 'Not implemented'
}
//#endregion

//#region Make Counter
/**
 * @param {number} initialValue
 * @return {Function}
 */
export default function makeCounter(initialValue = 0) {
    throw 'Not implemented'
}
//#endregion

//#region Mean
/**
 * @param {Array} array - Array from which the elements are all numbers.
 * @return {Number} Returns mean.
 */
export function mean(array) {
    throw 'Not implemented!'
}
//#endregion

//#region Cycle
/**
 * @template T
 * @param  {...T} values
 *
 * @returns () => T
 */
export function cycle(...values) {
    throw 'Not implemented'
}
//#endregion
