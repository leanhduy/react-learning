// * Enum-like objects to store different view modes
export const TODO_VIEW_MODE = {
    ALL: 'all',
    COMPLETED: 'completed',
    NOT_COMPLETED: 'notcompleted',
}

// * Helper function to generate a unique 4 characters id
export const generateUniqueId = () => {
    // * Generate a random 4-characters string represents an unique id
    return Math.random().toString(16).slice(2, 6)
}
