import React from "react";
export default class Chat extends React.Component {
  constructor(props) {
   super(props);
   this.state = this.props.state;
  }
  render() {
    return (
      <div>
      <h3>Chat</h3>
      <div className="mh-100">{this.props.text}</div>
      <textarea className="w-100" rows="1" cols="20"></textarea>
      </div>
    );
  }
};
