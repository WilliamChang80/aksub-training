import React, { Component } from "react";

class ErrorPage extends Component {
  render() {
    const { status, message } = this.props;
    return (
      <div>
        {status} - {message}
      </div>
    );
  }
}

export default ErrorPage;
