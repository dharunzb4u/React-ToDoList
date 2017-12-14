import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    componentWillMount()
    {
        this.code="Welcome to React JS. This is first code";
        this.inputValue="";
        this.counter=0;
    }
    showMsg=()=>{
        this.inputValue=this.refs.inputvalue.value;
        this.counter=this.counter+1;
        alert("Hello "+this.inputValue+"!! you have clicked "+this.counter+" times");
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
         {this.code}
        </p>
          <input type={"text"} ref={"inputvalue"} placeholder={"Enter your Name"}></input>
          <button onClick={this.showMsg}>Submit</button>
      </div>
    );
  }
}

export default App;
