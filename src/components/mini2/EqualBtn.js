import { Button } from '@mui/material'
import { TEXT_FG } from './colors'

const EqualBtn = ({ label, handleCalculate, style }) => {
    return (
        <Button
            variant="outlined"
            width={80}
            height={80}
            // color={TEXT_FG}
            sx={{
                width: '100%',
                height: '100%',
                backgroundColor: style.backgroundColor,
                fontSize: '3rem',
                color: TEXT_FG,
                borderRadius: '25px',
                '&:hover': {
                    backgroundColor: style.backgroundColor,
                    opacity: 0.6,
                },
            }}
            fontSize="2rem"
            onClick={handleCalculate}
        >
            {label}
        </Button>
    )
}

export default EqualBtn
