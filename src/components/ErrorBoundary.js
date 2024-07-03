import { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false,
            error: null,
        }
    }

    // static getDerivedStateFromError(error) {
    //     return {
    //         hasError: true,
    //         error: error,
    //     }
    // }

    componentDidCatch(error) {
        this.setState({
            ...this.state,
            hasError: true,
            error: error,
        })
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something wrong! {this.state.error?.message}</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary
