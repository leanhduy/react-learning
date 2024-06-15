import styled from '@emotion/styled'
import { Button } from '@mui/material'
import React, { useRef } from 'react'

const MyForm = () => {
    const ref = useRef(null)

    const focusUsername = () => {
        ref.current.focus()
    }

    return (
        <form>
            <StyledRow>
                <StyledInput type="text" ref={ref} />
                <Button
                    variant="contained"
                    color="warning"
                    onClick={focusUsername}
                >
                    Focus on username
                </Button>
            </StyledRow>
        </form>
    )
}

export default MyForm

const StyledRow = styled.div({
    alignItems: 'stretch',
    columnGap: '1rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
})

const StyledInput = styled.input({
    borderRadius: '5px',
})
