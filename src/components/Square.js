import styled from '@emotion/styled'
import React, { useState } from 'react'

const Square = ({ id, player, move, xMove, oMove, result }) => {
    const [label, setLabel] = useState(null)

    return (
        <StyledButton
            disabled={result > -1}
            onClick={() => {
                if (!label) {
                    setLabel(player === 'X' ? 'O' : 'X')
                    move()
                    if (player === 'X') {
                        oMove(id)
                    } else {
                        xMove(id)
                    }
                }
            }}
        >
            {!label ? '' : label}
        </StyledButton>
    )
}

export default Square

const StyledButton = styled.button({
    height: '50px',
    width: '50px',
})
