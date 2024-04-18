import { Button } from '@mui/material'
import { BUTTON_BG, TEXT_FG } from './colors'

const CalcClearBtn = ({ label, handleClear, style }) => {
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
            onClick={handleClear}
        >
            {label}
        </Button>
    )
}

export default CalcClearBtn
