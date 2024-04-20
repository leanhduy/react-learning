import { Box } from '@mui/material'
import { SCREEN_BG, TEXT_FG } from './colors'

const CalcScreen = ({ result, expression }) => {
    return (
        <>
            <Box
                color={TEXT_FG}
                display="flex"
                flexDirection="column"
                alignItems="end"
                justifyContent="center"
                mt={1}
                mb={2}
                pr={2}
                sx={{
                    borderRadius: '10px',
                    backgroundColor: SCREEN_BG,
                }}
            >
                <Box pt={1} fontSize="1rem" color="lightgray">
                    {expression.join('')}
                </Box>
                <Box fontSize="3.5rem">{result}</Box>
            </Box>
        </>
    )
}

export default CalcScreen
