import './App.css';
<<<<<<< HEAD
import './App.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
=======
import axios from 'axios';
import {Component} from 'react';
>>>>>>> 2b38f61d8038571712abc1d595331ef7ef80f3f8

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }

  fetchData = () =>{
    
    axios.get("https://www.alphavantage.co/query", {
      params:{ 
         function: "TIME_SERIES_DAILY_ADJUSTED",
         symbol: "IBM", //this can be changed depending on which stock we want
         apikey: "1WKONX2HMTRYF2JO",
   }})

    .then(res => {
      
      this.setState({data: res.data["Time Series (Daily)"]})
      this.setState({data: this.state.data["2020-09-30"]})
      //date can be changed later 
     
     
    })
    .catch((error) => {
      console.log(error);
    })
  }

  renderData = () => {
    if (this.state.data){
      console.log("inside if")
      console.log(this.state.data)
     
      return(
        <div>
          Open: {this.state.data["1. open"]}
        </div>
      )
    } else{
      console.log("no data")
      return null
    }
  }

  render() {
    return (
      <div>
        <button onClick = {this.fetchData}>click to fetch data</button>
        {this.renderData()}
      
<<<<<<< HEAD
      <p className="App-body">Add a Stock:</p>

      
      
  
      <DropdownButton id="dropdown-item-button" title="Add a Stock">
      <Dropdown.Item as="button">AAPL</Dropdown.Item>
      <Dropdown.Item as="button">NFLX</Dropdown.Item>
      <Dropdown.Item as="button">PNRA</Dropdown.Item>
</DropdownButton>

    </div>
   
    );}
    
=======
        <p>A Bear of a Project</p>
    
        <p className="App-body">Username:</p>

        <p className="App-body">Add a Stock:</p>
      </div>


    );
  }
}
>>>>>>> 2b38f61d8038571712abc1d595331ef7ef80f3f8

export default App;