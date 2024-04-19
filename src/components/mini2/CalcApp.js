import { Box, Container, Grid, Typography } from '@mui/material'
import { BUTTON_BG, EQUAL_BG, WRAPPER_BG } from './colors'
import CalcScreen from './CalcScreen'
import CalcBtn from './CalcBtn'
import { useEffect, useState } from 'react'
import { MATH_OPERATORS, NUMBERS, calculate } from './calculatorUtils'
import CalcClearBtn from './CalcClearBtn'
import EqualBtn from './EqualBtn'
import toastr from 'toastr'

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
    const [expression, setExpression] = useState([])
    const [result, setResult] = useState(0)

    useEffect(() => {
        console.log(prevInputType)
        console.log(expression)
    }, [result, expression, prevInputType])

    const addOperator = (label) => {
        // If it is a new Caculation, reset states
        if (expression.length === 0) {
            setPrevInputType(null)
            setResult(0)
        }

        // Get the type of the button on the calculator (number, operator, others)
        let inputType = NUMBERS.includes(label)
            ? 'number'
            : MATH_OPERATORS.includes(label)
            ? 'operator'
            : 'others'

        // Check the input type and the previous input type to perform appropriate update on the `expression` state
        switch (inputType) {
            case 'number':
                // Check the previous input type
                if (prevInputType === 'operator') {
                    // Prev input type = operator. Add new input to expression
                    setExpression([...expression, Number(label)])
                } else if (prevInputType === 'number') {
                    // Update the last element of input
                    let newNum =
                        expression[expression.length - 1] * 10 + Number(label)
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
                } else {
                    // Add new operator to the expression
                    setExpression([...expression, label])
                    setPrevInputType('operator')
                }
                break
            default:
                break
        }
    }
    const clearExpression = () => {
        setPrevInputType(null)
        setExpression([])
        setResult(0)
    }
    const handleCalculate = () => {
        setResult(calculate(expression))
        setExpression([])
        setPrevInputType(null)
    }

    return (
        <Box
            sx={{
                background:
                    'linear-gradient(0deg, rgba(55,151,200,1) 30%, rgba(252,176,48,1) 100%)',
                height: '100vh',
                padding: '100px',
            }}
        >
            <Container maxWidth="sm">
                <CalcScreen result={result} expression={expression} />
                <Grid container rowSpacing={1} columnSpacing={1}>
                    <Grid item xs={3}>
                        <CalcClearBtn
                            style={{ backgroundColor: BUTTON_BG }}
                            label="C"
                            handleClear={clearExpression}
                        />
                    </Grid>
                    {BUTTONS.map((b) => (
                        <Grid item xs={3} key={b}>
                            <CalcBtn
                                style={{ backgroundColor: BUTTON_BG }}
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
