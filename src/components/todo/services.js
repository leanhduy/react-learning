import toastr from 'toastr'

// GET
export const getAll = async (url) => {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw Error('Could not fetch data')
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

// PUT
export const updateSingle = async (url, item) => {
    try {
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        }

        const response = await fetch(url, requestOptions)
        if (!response.ok) {
            const errorData = await response.json() // Try to parse error information
            throw new Error(
                `Request failed: ${response.status} - ${errorData.message}`
            )
        }

        // return the response's http status code
        return response.status
    } catch (e) {
        console.error('Error updating todo:', e)
        throw e // Optionally re-throw to allow upstream error handling
    }
}

// POST
export const addSingle = async (url, item) => {
    try {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        }

        const response = await fetch(url, requestOptions)
        if (!response.ok) {
            const errorData = await response.json() // Try to parse error information
            notifyError(`Error adding new todo: ${errorData.message}`)
            throw new Error(
                `Request failed: ${response.status} - ${errorData.message}`
            )
        }

        // return the response's http status code
        return response.status
    } catch (e) {
        notifyError(`Error adding new todo: ${e}`)
    }
}

// DELETE
export const deleteItem = async (url) => {
    try {
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const response = await fetch(url, requestOptions)
        if (!response.ok) {
            const errorData = await response.json()
            notifyError(`Error while deleting todo: ${errorData.message}`)
            throw new Error(
                `Request failed: ${response.status} - ${errorData.message}`
            )
        }

        // return the response's http status code
        return response.status
    } catch (e) {
        notifyError(`Error adding new todo: ${e}`)
    }
}

// Notification - Success
export const notifySuccess = (message) => {
    toastr.success(message)
}

// Notification - Error
export const notifyError = (err) => {
    toastr.error(err)
}

export const uuidv4 = () =>
    '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, (c) =>
        (
            +c ^
            (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))
        ).toString(16)
    )
