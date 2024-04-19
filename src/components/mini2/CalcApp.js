import { Container, Grid, Typography } from '@mui/material'
import { BUTTON_BG, EQUAL_BG, WRAPPER_BG } from './colors'
import CalcScreen from './CalcScreen'
import CalcBtn from './CalcBtn'
import { useState } from 'react'
import { MATH_OPERATORS, NUMBERS, calculate } from './calculatorUtils'
import CalcClearBtn from './CalcClearBtn'
import EqualBtn from './EqualBtn'

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
const CLEAR_BUTTON = {
    label: 'C',
    action: null,
}
const EQUAL_BUTTON = {
    label: '=',
    action: null,
}

const CalcApp = () => {
    const [numInput, setNumInput] = useState(null)
    const [operatorInput, setOperatorInput] = useState(null)
    const [expression, setExpression] = useState([])
    const [result, setResult] = useState(0)
    const addOperator = (label) => {
        let inputType = NUMBERS.includes(label)
            ? 'number'
            : MATH_OPERATORS.includes(label)
            ? 'operator'
            : 'others'
        // input is a num
        switch (inputType) {
            case 'number':
                if (numInput) {
                    setNumInput((num) => num * 10 + Number(label))
                } else {
                    setNumInput(Number(label))
                }
                if (operatorInput) {
                    setExpression([...expression, operatorInput])
                    setOperatorInput(null)
                }
                break
            case 'operator':
                setOperatorInput(label)
                if (numInput) {
                    setExpression([...expression, numInput.toString()])
                    setNumInput(null)
                }
                break
            default:
                break
        }
    }
    const clearExpression = () => {
        setNumInput(null)
        setOperatorInput(null)
        setExpression([])
        setResult(0)
    }
    const handleCalculate = () => {
        debugger
        if (numInput) {
            // PROBLEM: THIS CODE DOES NOT TAKE EFFECT IMMEDIATELY, CAUSING ISSUE WITH THE CALCULATION
            setExpression([...expression, numInput.toString()])
            setNumInput(null)
        }
        setResult(calculate(expression))
    }

    return (
        <Container
            maxWidth="sm"
            sx={{
                backgroundColor: WRAPPER_BG,
                textAlign: 'center',
                padding: '10px 0px',
                borderRadius: '25px',
            }}
        >
            <Typography variant="h5">
                Num: {numInput} - operator: {operatorInput}
            </Typography>
            <Typography variant="h5">{JSON.stringify(expression)}</Typography>
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
    )
}

export default CalcApp
