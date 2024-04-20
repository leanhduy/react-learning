import { Box, Container, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import toastr from 'toastr'
import CalcBtn from './CalcBtn'
import CalcClearBtn from './CalcClearBtn'
import CalcScreen from './CalcScreen'
import EqualBtn from './EqualBtn'
import {
    DECIMAL_POINT,
    MATH_OPERATORS,
    NUMBERS,
    SIGN_OPERATORS,
    calculate,
} from './calculatorUtils'
import { BG, BUTTON_BG, EQUAL_BG, WRAPPER_BG } from './colors'
import beepEffect from '../../sounds/beep.mp3'

const BUTTONS = [
    '+-',
    '%',
    '/',
    '7',
    '8',
    '9',
    '*',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    '.',
]

const CalcApp = () => {
    const [prevInputType, setPrevInputType] = useState(null)
    const [decimalCount, setDecimalCount] = useState(0) // To prevent user input two decimal point in a number
    const [expression, setExpression] = useState([])
    const [decimalPart, setDecimalPart] = useState(0)
    const [sign, setSign] = useState(true) // true (+)  false (-)
    const [result, setResult] = useState(0)

    const playSound = () => {
        new Audio(beepEffect).play()
    }

    useEffect(() => {
        // Check if the last member of expression is a number.
        // If yes, update the sign. Otherwise, do nothing
        let lastEl = expression[expression.length - 1]
        if (
            expression.length > 0 &&
            !MATH_OPERATORS.includes(lastEl) &&
            !DECIMAL_POINT.includes(lastEl)
        ) {
            setExpression([
                ...expression.slice(0, expression.length - 1),
                -lastEl,
            ])
        }
    }, [sign])

    useEffect(() => {}, [
        decimalCount,
        decimalPart,
        expression,
        prevInputType,
        result,
    ])

    const addOperator = (label) => {
        // If it is a new Caculation, reset states
        if (expression.length === 0) {
            setPrevInputType(null)
            setResult(0)
        }

        // Get the type of the button on the calculator (number, operator, sign, decimal)
        let inputType = NUMBERS.includes(label)
            ? 'number'
            : MATH_OPERATORS.includes(label)
            ? 'operator'
            : DECIMAL_POINT.includes(label)
            ? 'decimal'
            : SIGN_OPERATORS.includes(label)
            ? 'sign'
            : 'others'

        // Check the input type and the previous input type to perform appropriate update on the `expression` state
        switch (inputType) {
            case 'number':
                // Check the previous input type
                if (prevInputType === 'operator') {
                    // Prev input type = operator. Add new input to expression
                    setExpression([...expression, Number(label)])
                } else if (prevInputType === 'number') {
                    if (decimalCount === 0) {
                        // Update the last element of input
                        let newNum =
                            expression[expression.length - 1] * 10 +
                            Number(label)
                        setExpression([
                            ...expression.slice(0, expression.length - 1),
                            newNum,
                        ])
                    } else {
                        let newDecimal =
                            decimalPart +
                            Number(label) * Math.pow(10, -1 * decimalCount)
                        let newNum =
                            expression[expression.length - 1] + newDecimal
                        setDecimalCount((c) => c + 1)
                        setDecimalPart(decimalPart)
                        setExpression([
                            ...expression.slice(0, expression.length - 1),
                            newNum,
                        ])
                    }
                } else if (prevInputType === 'decimal') {
                    // debugger
                    let newDecimal =
                        decimalPart +
                        Number(label) * Math.pow(10, -1 * decimalCount)
                    let newNum = expression[expression.length - 1] + newDecimal
                    setDecimalCount((c) => c + 1)
                    setDecimalPart(decimalPart)
                    setExpression([
                        ...expression.slice(0, expression.length - 1),
                        newNum,
                    ])
                } else {
                    // Prev input type = null. Add new input to expression
                    setExpression([...expression, Number(label)])
                }
                // Update the previous input type
                setPrevInputType('number')
                break
            case 'operator':
                // Check the previous input type
                if (prevInputType === null) {
                    // Prev input type = null. Warn user
                    toastr.warning('Please input a number')
                } else if (prevInputType === 'operator') {
                    // Update the last element of expression with the operator input
                    setExpression([
                        ...expression.slice(0, expression.length - 1),
                        label,
                    ])
                    setPrevInputType('operator')
                } else if (['sign', 'decimal'].includes(prevInputType)) {
                    playSound()
                    toastr.warning(
                        'Please input a number first',
                        'Invalid input'
                    )
                } else {
                    // previous input is a number
                    // Add new operator to the expression
                    setExpression([...expression, label])
                    setPrevInputType('operator')
                    setDecimalCount(0)
                    setDecimalPart(0)
                }
                break
            case 'decimal':
                if (expression.length === 0) {
                    toastr.warning(
                        'Please input a number first',
                        'Invalid input'
                    )
                    playSound()
                } else if (decimalCount > 0) {
                    playSound()
                } else if (['sign', 'operator'].includes(prevInputType)) {
                    toastr.warning('Please input a number', 'Invalid input')
                } else {
                    setDecimalCount((d) => d + 1)
                    setPrevInputType('decimal')
                }
                break
            case 'sign':
                switch (prevInputType) {
                    case 'decimal':
                        toastr.warning('Please input a number')
                        break
                    default:
                        setSign((s) => !s)
                        break
                }
                break
            default:
                toastr.error('This is an invalid input', 'Invalid input')
                break
        }
    }
    const clearExpression = () => {
        setPrevInputType(null)
        setExpression([])
        setResult(0)
        setDecimalCount(0)
        setDecimalPart(0)
    }
    const handleCalculate = () => {
        setResult(calculate(expression))
        setExpression([])
        setPrevInputType(null)
        setDecimalCount(0)
        setDecimalPart(0)
    }

    return (
        <Box
            sx={{
                background:
                    'linear-gradient(0deg, rgba(251,176,52,1) 0%, rgba(91,73,209,1) 100%)',
                height: '100vh',
                padding: '100px',
            }}
        >
            <Typography variant="h4" color="warning">
                {JSON.stringify(expression)}
            </Typography>
            <Container
                maxWidth="xs"
                sx={{
                    backgroundColor: WRAPPER_BG,
                    borderRadius: '25px',
                    padding: '1.5rem 2rem 1rem',
                }}
            >
                <CalcScreen result={result} expression={expression} />
                <Grid container rowSpacing={1} columnSpacing={1}>
                    <Grid item xs={3}>
                        <CalcClearBtn
                            style={{ backgroundColor: BG }}
                            label="C"
                            handleClear={clearExpression}
                        />
                    </Grid>
                    {BUTTONS.map((b) => (
                        <Grid item xs={3} key={b}>
                            <CalcBtn
                                style={{
                                    backgroundColor:
                                        NUMBERS.includes(b) ||
                                        DECIMAL_POINT.includes(b)
                                            ? BUTTON_BG
                                            : BG,
                                }}
                                label={b}
                                addOperator={addOperator}
                            />
                        </Grid>
                    ))}
                    <Grid item xs={6}>
                        <EqualBtn
                            label="="
                            style={{ backgroundColor: EQUAL_BG }}
                            handleCalculate={handleCalculate}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default CalcApp
