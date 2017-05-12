import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: "on"
    };
  }

  handleClick() {
    this.props.route.appState.clicked_amount ++;
    if(this.state.toggle === "on"){
      this.setState({ toggle : "off"});
    }else{
      this.setState({ toggle : "on"});
    }   
  }

  render() {
    return (
      <div className="hello-world">
        <p>🤓 Hello World {this.state.toggle}!</p>
        <button onClick={this.handleClick.bind(this)}>add ☝️</ button > 
        <p>This button was clicked {this.props.route.appState.clicked_amount}</p>
      </div>
    )
  }
};

export default App;
