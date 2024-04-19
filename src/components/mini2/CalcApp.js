import { Box, Container, Grid, Typography } from '@mui/material'
import { BUTTON_BG, EQUAL_BG, WRAPPER_BG } from './colors'
import CalcScreen from './CalcScreen'
import CalcBtn from './CalcBtn'
import { useEffect, useState } from 'react'
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

const CalcApp = () => {
    const [prevInputType, setPrevInputType] = useState(null)
    const [curInputType, setCurInputType] = useState(null)
    const [numInput, setNumInput] = useState(null)
    const [operatorInput, setOperatorInput] = useState(null)
    const [expression, setExpression] = useState([])
    const [result, setResult] = useState(0)
    const [isCalculate, setIsCalculate] = useState(false)

    useEffect(() => {
        if (isCalculate) {
            let r = calculate(expression)
            setResult(r)
        } else {
            setResult(0)
        }
    }, [isCalculate])

    const addOperator = (label) => {
        // If it is a new Caculation, reset states
        if (isCalculate) {
            setResult(0)
            setExpression([])
            setIsCalculate(false)
            setNumInput(null)
            setOperatorInput(null)
        }

        // Get the inputType
        let inputType = NUMBERS.includes(label)
            ? 'number'
            : MATH_OPERATORS.includes(label)
            ? 'operator'
            : 'others'

        // Set the current input type
        setCurInputType(inputType)

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
        if (numInput) {
            setExpression([...expression, numInput.toString()])
            setIsCalculate(true)
        }
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
