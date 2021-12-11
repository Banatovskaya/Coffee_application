import { Component } from "react";

class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch(error, errorinfo) {
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <div>ERROR!!!</div>
        }
        return this.props.children;
    }

}

export default ErrorBoundary