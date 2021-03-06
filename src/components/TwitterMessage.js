import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      remainingChars: props.maxChars
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    }, () => {
      this.setState({
        remainingChars: this.props.maxChars - this.state.value.length
      })
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange} /><br/>
        <p>{this.state.remainingChars} characters left</p>
      </div>
    );
  }
}

export default TwitterMessage;
