import PropTypes from 'prop-types'
import React from 'react'
import '../../styles/mini1.css'

export const ClearAllTodos = ({ vector = 'vector.svg', divClassName }) => {
    const clearAll = () => {}

    return (
        <div className="clear-all text-end">
            <div className="frame">
                <img className="vector" alt="Vector" src={vector} />
                <div className={`text-wrapper ${divClassName}`}>
                    Clear All Todos
                </div>
            </div>
        </div>
    )
}
