import styled from '@emotion/styled'
import { colors } from '../styles'
import { Component } from 'react'

const IMG =
    'https://t4.ftcdn.net/jpg/05/24/04/51/360_F_524045110_UXnCx4GEDapddDi5tdlY96s4g0MxHRvt.jpg'

class MyErrorBoundary extends Component {
    // * Lifecycle methods
    constructor(props) {
        super(props)
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        }
    }

    // * Update state when an error is caught
    static getDerivedStateFromError(error, errorInfo) {
        return { hasError: true, error: error, errorInfo: errorInfo }
    }

    // * Logging the error message
    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true,
            error: error,
            errorInfo: errorInfo,
        })
    }

    // * Use conditional rendering to render the Fallback UI if any
    render() {
        if (this.state.hasError) {
            return (
                <FallbackContainer>
                    <FallbackImg src={IMG} />
                    <FallbackMessage>Something is wrong</FallbackMessage>
                </FallbackContainer>
            )
        }
        return this.props.children
    }
}

export default MyErrorBoundary

const FallbackContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    background: colors.blue.light,
})

const FallbackImg = styled.img({
    height: '200px',
})

const FallbackMessage = styled.h3({
    color: colors.red.base,
})
