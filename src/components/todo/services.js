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

        // console.log the status
        return response.status
    } catch (e) {
        console.error('Error updating todo:', e)
        throw e // Optionally re-throw to allow upstream error handling
    }
}
