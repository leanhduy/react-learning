import styled from '@emotion/styled'
import { Card, CardContent } from '@mui/material'
import { createPortal } from 'react-dom'

const Modal = ({ children, onClose }) => {
    return createPortal(
        <ModalContainer>
            <Card>
                <CardContent>
                    {children}
                    <button onClick={onClose}>X</button>
                </CardContent>
            </Card>
        </ModalContainer>,
        document.querySelector('#portal-root')
    )
}

export default Modal

const ModalContainer = styled.div({
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, .8)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
})
