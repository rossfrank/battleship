import React from 'react';
import Chat from './chat';
import Board from './board';

export default class Game extends React.Component {
  constructor(props) {
   super(props);
   this.state = this.props.state;
  }
  render() {
    return (
      <div className="d-flex flex-column">
      <p className="p-2">test</p>
      <Board className="p-2" />
      <Board className="p-2" />
      <Chat className="p-2" text="test123" />
      </div>
    );
  }
};
