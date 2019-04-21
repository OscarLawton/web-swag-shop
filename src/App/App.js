import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HttpService from "../Services/http-service"
import Product from "../product/product"
const http = new HttpService();
class App extends Component {
  constructor(props){
    super(props);
    http.getProducts();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         
        </header>
        <div className="App-main">
            <Product />
        </div>
      </div>
    );
  }
}

export default App;
