//#region minBy()
/**
 * Find the element inside an array `arr` with the minimum value after going through `iteratee`
 * Given a
 * @param {Array} arr: The array to iterate over
 * @param {function} iteratee: The iteratee invoked per element, which is a function that accepts one argument (value)
 * @returns {*} the minimum value
 */
export const minBy = (array, iteratee) => {
    let current, result
    for (const element of array) {
        const computed = iteratee(element)
        if (
            computed !== undefined &&
            (current === undefined || computed < current)
        ) {
            current = computed
            result = element
        }
    }
    return result
}
//#endregion

//#region Stack
export class Stack {
    constructor() {
        this._items = []
    }

    /**
     * Pushes an item onto the top of the stack.
     * @param {*} item The item to be pushed onto the stack.
     * @return {number} The new length of the stack.
     */
    push(item) {
        return this._items.push(item)
    }

    /**
     * Remove an item at the top of the stack.
     * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
     */
    pop() {
        return this._items.pop()
    }

    /**
     * Determines if the stack is empty.
     * @return {boolean} `true` if the stack has no items, `false` otherwise.
     */
    isEmpty() {
        return this._items.length === 0
    }

    /**
     * Returns the item at the top of the stack without removing it from the stack.
     * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
     */
    peek() {
        return this.isEmpty()
            ? 'undefined'
            : this._items[this._items.length - 1]
    }

    /**
     * Returns the number of items in the stack.
     * @return {number} The number of items in the stack.
     */
    length() {
        return this._items.length
    }
}
//#endregion

//#region Mean
/**
 * @param {Array} array - Array from which the elements are all numbers.
 * @return {Number} Returns mean.
 */
export function mean(array) {
    return array.length == 0
        ? NaN
        : array.reduce((total, current) => total + current) / array.length
}
//#endregion

//#region Make Counter
/**
 * @param {number} initialValue
 * @return {Function}
 */
export function makeCounter(initialValue = 0) {
    let value = initialValue
    return () => value++
}
//#endregion
