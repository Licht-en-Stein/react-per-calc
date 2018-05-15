import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      quantity: null,
      percentage: null,
      result: null
       }
  }

   calcHandler = name => event =>{
      this.setState({[name]: parseInt(event.target.value)});
      console.log(name)
  }

  

  render() {
    return (
      <div className="App">
            <h1>React Percentage Calculator</h1>
            <div className="one">
              <span>The </span>
              <input type="number" placeholder="percent" onChange={this.calcHandler('percentage')}/>
              <span> % of </span>
              <input type="number" placeholder="quantity" onChange={this.calcHandler('quantity')}/>
              <span> is {this.state.quantity / this.state.percentage}</span>
           </div>
           <div className="two">
              <span>If </span>
              <input type="number" placeholder="quantity" onChange={this.calcHandler('quantity2')}/>
              <span> is the </span>
              <input type="number" placeholder="percent" onChange={this.calcHandler('percentage2')}/>
              <span> % the total is {this.state.quantity2 * this.state.percentage2}</span>
           </div>
           <div className="three ">
              <input type="number" placeholder="quantity" onChange={this.calcHandler('quantity3')}/>
              <span> is the </span>
              <input type="number" placeholder="percent" onChange={this.calcHandler('percentage3')}/>
              <span> % of {this.state.quantity3 / this.state.percentage3}</span> 
           </div>
      </div>
    );
  }
}

export default App;
