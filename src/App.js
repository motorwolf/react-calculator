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
    prevValue: "0",
    operator: "",
  }

  add = (n,p) => {
    return parseInt(n) + parseInt(p);
  }
  subtract = (n,p) => {
    return parseInt(n) - parseInt(p);
  }

  divide = (n,p) => {
    return parseInt(n) / parseInt(p);
  }

  multiply = (n, p) => {
    return parseInt(n) * parseInt(p);
  }

  operations = {
    '+': this.add,
    '-': this.subtract,
    '/': this.divide,
    '*': this.multiply,
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

  equals = () => {
    if(this.state.operator !== ''){
      let newNumber = this.operations[this.state.operator](this.state.prevValue, this.state.currentNumber);
      this.setState({prevValue: '0'});
      this.setState({currentNumber: newNumber});
    }
  }

  operator = (op) => {
    if(this.state.operator !== ''){
      let newNumber = this.operations[this.state.operator](this.state.prevValue, this.state.currentNumber);
      this.setState({prevValue: newNumber});
    }
    else {
      this.setState({prevValue: this.state.currentNumber});
    }
      this.setState({operator:op});
      this.setState({currentNumber: '0'});
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
      <Button val="+" clickFunction={this.operator}/>
      <Button val="-" clickFunction={this.operator}/>
      <Button val="*" clickFunction={this.operator}/>
      <Button val="/" clickFunction={this.operator}/>
      <Button val="=" clickFunction={this.equals}/>
      </>
    );
  }
}

export default App;
