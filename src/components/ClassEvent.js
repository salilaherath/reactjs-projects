import { Component } from 'react';

class ClassEvent extends Component {
  handleClick() {
    console.log('Class based handling');
  }
  render() {
    return (
      <div>
        <h1>This is a class based component</h1>
        <button onClick={this.handleClick}>Click Here!</button>
      </div>
    );
  }
}

export default ClassEvent;
