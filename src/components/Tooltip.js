import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'

const Tooltip = ({ coords }) => {
    const mount = document.querySelector('#portal-root')
    const el = document.createElement('div')

    useEffect(() => {
        mount.appendChild(el)
        return () => {
            mount.removeChild(el)
        }
    }, [mount, el])

    return createPortal(
        <div
            style={{
                backgroundColor: 'yellow',
                position: 'fixed',
                left: coords.x,
                top: coords.y,
            }}
        >
            This is the tooltip
        </div>,
        el
    )
}

export default Tooltip
