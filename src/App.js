import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Button = (props) => {
  return (
    <button onClick={() => {props.clickFunction(props.val)}}>{props.val}</button>
  );
}

class App extends Component {
  state = {
    currentNumber: "0",
    prevValue: "",
  }
  
  addNumber = (n) => {
    if(this.state.currentNumber === "0"){
      this.setState({currentNumber: n});
    }
    else {
      this.setState({currentNumber: this.state.currentNumber + n});
    }
  }

  addDecimal = (n) => {
    if(this.state.currentNumber.indexOf('.') === -1){
        this.setState({currentNumber: this.state.currentNumber + n});
    }
  }

  add = () => {
    //this.setState({operator: })
  }
  render() {
    return (
      <>
      <h2>{this.state.prevValue}</h2>
      <h2>{this.state.operator}</h2>
      <h2>{this.state.currentNumber}</h2>
      
      <Button val="1" clickFunction={this.addNumber}/>
      <Button val="2" clickFunction={this.addNumber}/>
      <Button val="3" clickFunction={this.addNumber}/>
      <Button val="4" clickFunction={this.addNumber}/>
      <Button val="5" clickFunction={this.addNumber}/>
      <Button val="6" clickFunction={this.addNumber}/>
      <Button val="7" clickFunction={this.addNumber}/>
      <Button val="8" clickFunction={this.addNumber}/>
      <Button val="9" clickFunction={this.addNumber}/>
      <Button val="0" clickFunction={this.addNumber}/>
      <Button val="." clickFunction={this.addDecimal}/>
      <Button val="+" clickFunction={this.add}/>
      </>
    );
  }
}

export default App;
