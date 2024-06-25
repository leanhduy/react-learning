import styled from '@emotion/styled'
import React, { useState } from 'react'
import Square from './Square'

const Board = ({ player, setPlayer, xMove, oMove, result }) => {
    const move = () => {
        setPlayer((prev) => (prev === 'X' ? 'O' : 'X'))
    }

    return (
        <Container>
            <Row>
                <Square
                    id={1}
                    player={player}
                    move={move}
                    xMove={xMove}
                    oMove={oMove}
                    result={result}
                />
                <Square
                    id={2}
                    player={player}
                    move={move}
                    xMove={xMove}
                    oMove={oMove}
                    result={result}
                />
                <Square
                    id={3}
                    player={player}
                    move={move}
                    xMove={xMove}
                    oMove={oMove}
                    result={result}
                />
            </Row>
            <Row>
                <Square
                    id={4}
                    player={player}
                    move={move}
                    xMove={xMove}
                    oMove={oMove}
                    result={result}
                />
                <Square
                    id={5}
                    player={player}
                    move={move}
                    xMove={xMove}
                    oMove={oMove}
                    result={result}
                />
                <Square
                    id={6}
                    player={player}
                    move={move}
                    xMove={xMove}
                    oMove={oMove}
                    result={result}
                />
            </Row>
            <Row>
                <Square
                    id={7}
                    player={player}
                    move={move}
                    xMove={xMove}
                    oMove={oMove}
                    result={result}
                />
                <Square
                    id={8}
                    player={player}
                    move={move}
                    xMove={xMove}
                    oMove={oMove}
                    result={result}
                />
                <Square
                    id={9}
                    player={player}
                    move={move}
                    xMove={xMove}
                    oMove={oMove}
                    result={result}
                />
            </Row>
        </Container>
    )
}

export default Board

const Container = styled.div({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
})

const Row = styled.div({
    columnGap: '.25rem',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '.25rem',
})

const BoardCell = styled.div({
    border: '1px solid black',
    height: '50px',
    width: '50px',
})
