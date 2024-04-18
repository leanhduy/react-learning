import { Button } from '@mui/material'
import { TEXT_FG } from './colors'
import { NUMBERS, MATH_OPERATORS, SIGN_OPERATOR } from './calculatorUtils'

const CalcBtn = ({ label, style, expression, setExpression }) => {
    return (
        <Button
            variant="contained"
            sx={{
                width: '100%',
                height: '100%',
                backgroundColor: style.backgroundColor,
                fontSize: '3rem',
                color: TEXT_FG,
                borderRadius: '25px',
                '&:hover': {
                    backgroundColor: style.backgroundColor,
                    opacity: 0.65,
                },
            }}
            onClick={() => {
                // updateExpression(label)
                setExpression([...expression, label])
            }}
        >
            {label}
        </Button>
    )
}

export default CalcBtn
