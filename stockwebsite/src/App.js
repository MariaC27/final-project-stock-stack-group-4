
import './App.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {Component} from 'react';
import StockBoard from './components/StockBoard';
import Stock from './components/Stock';
import React from 'react';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
      username: '',
      stock: '',
      data: [], 
    }

    this.handleClick = this.handleClick.bind(this);
    
  }



  handleClick = (event) => {
    this.setState ={isLoggedIn: true} 
    console.log("button clicked")

  }


  chooseStock = (stockName) =>{
    console.log(stockName)
    this.setState({stock: stockName})
   
    
  }

  handleClick = (event) => {
    this.setState({ isLoggedIn: true})
    console.log("button clicked")
    
  }

  onChangeFunction = (event) => {
    this.setState({username: event.target.value})
  }

  chooseStock = (stockName) =>{
    this.setState({stock: stockName})
  }


  
  onChangeFunction = (event) => {
    this.setState({username: event.target.value})
  }

  render() {

    
    console.log(this.state.isLoggedIn)

    if(this.state.isLoggedIn === true) {
      console.log(this.state.isLoggedIn);
      console.log("true option");
      var sayHello = 'welcome, ' + this.state.username 
      return (
        <div className = "App-header">
          
          
          <p className="Title">A Bear of a Project</p>
          <p className="Title-line">______________</p>

          <h1 className="Welcome">{ sayHello }</h1>

          <br></br>
          <br></br>

      <DropdownButton id="dropdown-item-button" title="Add a Stock">
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("AAPL")}>AAPL</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("NFLX")}>NFLX</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("IRBT")}>IRBT</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("UPWK")}>UPWK</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("FVRR")}>FVRR</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("RDFN")}>RDFN</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("BYND")}>BYND</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("ETSY")}>ETSY</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("TDOC")}>TDOC</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("ZG")}>ZG</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("ZM")}>ZM</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("PINS")}>PINS</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("ROKU")}>ROKU</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("MELI")}>MELI</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("ISRG")}>ISRG</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("AMZN")}>AMZN</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("ARKG")}>ARKG</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("SPCE")}>SPCE</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("CLOV")}>CLOV</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("IPOE")}>IPOE</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("MSFT")}>MSFT</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("GOOG")}>GOOG</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("FB")}>FB</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("TSLA")}>TSLA</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("TSM")}>TSM</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("JPM")}>JPM</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("WMT")}>WMT</Dropdown.Item>
      <Dropdown.Item as="button" onClick = {()=>this.chooseStock("PYPL")}>PYPL</Dropdown.Item>
      
      </DropdownButton>

        <StockBoard username={this.state.username} stock={this.state.stock}></StockBoard>
          
  
          <br></br>
          <p></p>
  
        </div>
      )}

    if(this.state.isLoggedIn === false) {
      console.log(this.state.isLoggedIn);
      console.log("false option");
      return(
          <div className = "App-header">
  
          <p className="Title">A Bear of a Project</p>
          <p className="Title-line">______________</p>
  

          <p className="Name-enter">Enter Your Username Below:</p>
          <input type="text" onChange={this.onChangeFunction}/>

          <br></br>
          <button className="Submit-button" onClick={this.handleClick}> Submit </button>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
       
    
   </div>
  
        )
    }
  
  }
  }

export default App;

