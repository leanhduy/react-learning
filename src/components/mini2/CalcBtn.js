import { Button } from '@mui/material'
import { TEXT_FG } from './colors'

const CalcBtn = ({ label, style, addOperator }) => {
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
                addOperator(label)
            }}
        >
            {label}
        </Button>
    )
}

export default CalcBtn
