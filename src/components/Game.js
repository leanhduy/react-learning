import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import Board from './Board'

const winningConditions = [
    [1, 2, 3],
    [1, 4, 7],
    [1, 5, 9],
    [2, 5, 8],
    [3, 5, 7],
    [3, 6, 9],
    [4, 5, 6],
    [7, 8, 9],
]

// * Check if a moves contains any winning condition array
const checkWinCondition = (moves) => {
    return winningConditions.some((condition) => {
        if (condition.every((num) => moves.includes(num))) {
            return true
        }
        return false
    })
}

const Game = () => {
    const [player, setPlayer] = useState(null)
    const [result, setResult] = useState(-1)
    const [xMoves, setXMoves] = useState([])
    const [oMoves, setOMoves] = useState([])

    const addXMove = (squareId) => {
        setXMoves((prev) => [...prev, squareId])
    }

    const addOMove = (squareId) => {
        setOMoves((prev) => [...prev, squareId])
    }

    // * When `player` is change, check who win
    useEffect(() => {
        if (xMoves.length >= 3 || oMoves.length >= 3) {
            if (checkWinCondition(xMoves)) {
                setResult(1)
            } else if (checkWinCondition(oMoves)) {
                setResult(2)
            } else if (xMoves.length + oMoves.length === 9) {
                setResult(0)
            }
        }
    }, [player, xMoves, oMoves])

    return (
        <Container>
            <StatusBar>
                {result > -1
                    ? `${
                          result === 0
                              ? 'Draw!'
                              : result === 1
                              ? 'X won!'
                              : 'O won!'
                      }`
                    : `Next player: ${player === null ? 'X' : 'O'}`}
            </StatusBar>
            <Board
                player={player}
                setPlayer={setPlayer}
                xMove={addXMove}
                oMove={addOMove}
                result={result}
            />
        </Container>
    )
}

export default Game

const Container = styled.div({
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
})

const StatusBar = styled.div({})
