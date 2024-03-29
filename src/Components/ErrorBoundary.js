import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            haserror: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({haserror: true})
    }

    render() {
        if (this.state.haserror) {
            return <h1>Oooops. That is not good</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary