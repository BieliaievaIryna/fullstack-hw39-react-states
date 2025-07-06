import { Component } from 'react';

interface ClickCounterState {
  count: number;
}

class ClickCounterClass extends Component<{}, ClickCounterState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          Clicked {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClickCounterClass;