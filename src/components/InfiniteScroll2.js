import { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { comment } from 'stylis'

const InfiniteScroll2 = () => {
    // Same set up
    const [comments, setComments] = useState([])
    const [page, setPage] = useState(1)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchComments()
    }, [])

    async function fetchComments() {
        const url = `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10`
        setError(null)

        try {
            let res = await fetch(url)
            let data = await res.json()
            setComments((prevComments) => [...prevComments, ...data])
            setPage((prev) => prev + 1)
        } catch (error) {
            setError(error)
        }
    }

    return (
        <>
            <h2>Infinite Scroll - Using 3rd lib</h2>
            <InfiniteScroll
                dataLength={comments.length}
                next={fetchComments}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >
                {comments &&
                    comments.map((c) => (
                        <div>
                            <h6>Comment: {c.id}</h6>
                            <p>{c.name}</p>
                        </div>
                    ))}
            </InfiniteScroll>
        </>
    )
}

export default InfiniteScroll2
