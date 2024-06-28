import { Component } from 'react'

class User extends Component {
    constructor() {
        super()
        this.state = {
            username: 'Duy',
            age: 30,
            counter: 0,
        }
    }

    // Lifecycle methods
    componentDidMount() {
        console.log('User component is mounted')
    }

    shouldComponentUpdate() {
        console.log('Component will updated')
        return true
    }

    componentDidUpdate() {
        console.log('Component is updated')
    }

    componentWillUnmount() {
        console.log('User component will be unmounted')
    }

    // Event handler
    increaseCounter = () => {
        this.setState({ ...this.state, counter: this.state.counter + 1 })
    }

    render() {
        return (
            <div>
                <h3>Username: {this.state.username}</h3>
                <p>Age: {this.state.age}</p>
                <p>Counter: {this.state.counter}</p>
                <button onClick={this.increaseCounter}>Increase Counter</button>
            </div>
        )
    }
}

export default User
