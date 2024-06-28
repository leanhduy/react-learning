import { useState } from 'react'
import Modal from './Modal'

function App() {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <div>
            <h1>React Portals</h1>
            <button onClick={openModal}>Open Modal</button>
            {isOpen && (
                <Modal onClose={closeModal}>
                    <h3>This is a modal</h3>
                </Modal>
            )}
        </div>
    )
}

export default App
