import { Container, Grid } from '@mui/material'
import { BUTTON_BG, EQUAL_BG, WRAPPER_BG } from './colors'
import CalcScreen from './CalcScreen'
import CalcBtn from './CalcBtn'
import { useState } from 'react'
import { calculate } from './calculatorUtils'
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
    const [expression, setExpression] = useState([])
    const [result, setResult] = useState(0)
    const addOperator = (el) => {
        // TODO: HAPPY SCENARIOS ONLY - Will enhance for more complex scenarios later
        setExpression([...expression, el.target.textContent])
    }
    const clearExpression = () => {
        setExpression([])
        setResult(0)
    }
    const handleCalculate = () => {
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
                            expression={expression}
                            setExpression={setExpression}
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
