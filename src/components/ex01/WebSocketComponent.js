import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React, { useState, useEffect } from 'react'

const WS_ENDPOINT = 'wss://echo.websocket.org'
const WebSocketComponent = () => {
    const [messages, setMessages] = useState([])
    let ws

    useEffect(() => {
        // ? Indicate loading status
        // ? Create new websocket connection to the web socket echo server
        const ws = new WebSocket(WS_ENDPOINT)

        // ? Listen for messages
        ws.addEventListener('message', (event) => {
            setMessages((prev) => [...prev, event.data])
        })

        // ? Clean up function, close the web socket connection
        return () => {
            ws.close()
        }
    }, [])

    return (
        <Box>
            <h4>Connecting to a Websocket echo server</h4>
            {!messages ?? <h6>Loading...</h6>}
            <ul>
                {messages.map((message, index) => (
                    <StyledListItem key={index}>{message}</StyledListItem>
                ))}
            </ul>
        </Box>
    )
}

export default WebSocketComponent

const StyledListItem = styled.li({
    listStyleType: 'none',
})
