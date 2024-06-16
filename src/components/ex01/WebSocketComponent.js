import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React, { useState, useEffect } from 'react'

const WS_ENDPOINT = 'wss://echo.websocket.org'
const WebSocketComponent = () => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        // ? Indicate loading status
        // ? Create new websocket connection to the web socket echo server
        const ws = new WebSocket(WS_ENDPOINT)

        // ? Listen for messages
        ws.onmessage = (event) => {
            setMessages((prev) => [...prev, event.data])
        }

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
                    <STyledListItem key={index}>{message}</STyledListItem>
                ))}
            </ul>
        </Box>
    )
}

export default WebSocketComponent

const STyledListItem = styled.li({
    listStyleType: 'none',
})
