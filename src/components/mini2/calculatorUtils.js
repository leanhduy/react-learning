export const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
export const MATH_OPERATORS = ['+', '-', '*', '/', '%']
export const DECIMAL_POINT = ['.', ',']
export const SIGN_OPERATORS = ['+-', '+/-']
export const HIGH_OPERATORS = ['+', '-']
export const LOW_OPERATORS = ['*', '/', '%']

export const calculate = (expression) => {
    // debugger
    let result
    if (expression.length === 0) {
        return 0
    }
    if (expression.length === 1) {
        return Number(expression[0])
    }
    let opIdx, leftOperand, rightOperand
    // Define the left, opIdx, and right
    opIdx = expression.findLastIndex((o) => HIGH_OPERATORS.includes(o))
    if (opIdx === -1) {
        opIdx = expression.findLastIndex((o) => LOW_OPERATORS.includes(o))
        if (opIdx === -1) {
            console.log('Invalid math expression')
        }
    }
    leftOperand = calculate(expression.slice(0, opIdx))
    rightOperand = calculate(expression.slice(opIdx + 1, expression.length))

    if (leftOperand === NaN || rightOperand === NaN) {
        return NaN
    }
    switch (expression[opIdx]) {
        case '+':
            result = leftOperand + rightOperand
            break
        case '-':
            result = leftOperand - rightOperand
            break
        case '*':
            result = leftOperand * rightOperand
            break
        case '/':
            result = rightOperand === 0 ? NaN : leftOperand / rightOperand
            break
        case '%':
            result = rightOperand === 0 ? NaN : leftOperand % rightOperand
            break
        default:
            result = NaN
            break
    }

    return Math.round(result * 100) / 100 // Round the number to 2 decimal points
}
