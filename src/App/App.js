import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HttpService from "../Services/http-service"
import Product from "../product/product"
const http = new HttpService();
class App extends Component {

  constructor(props){

    super(props);
    this.loadData = this.loadData.bind(this);
    this.loadData();
  
  }

  loadData = () =>{
    http.getProducts().then(products => {
      console.log(products);
    }, err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h4>The Swag Shop</h4>
        </header>
        <div className="container App-main">
            <div className="row">
            <Product price="5.99" title="cool toy gun" imgURL="https://ae01.alicdn.com/kf/HTB1NkpTaPihSKJjy0Fiq6AuiFXa4/Colorful-Cool-Toy-Gun-With-Soft-Bullets-The-Best-Toys-for-Children-as-the-Gift-Wonderful.jpg_640x640.jpg"/>
            <Product price="5.99" title="cool toy gun" imgURL="https://ae01.alicdn.com/kf/HTB1NkpTaPihSKJjy0Fiq6AuiFXa4/Colorful-Cool-Toy-Gun-With-Soft-Bullets-The-Best-Toys-for-Children-as-the-Gift-Wonderful.jpg_640x640.jpg"/>
            <Product price="5.99" title="cool toy gun" imgURL="https://ae01.alicdn.com/kf/HTB1NkpTaPihSKJjy0Fiq6AuiFXa4/Colorful-Cool-Toy-Gun-With-Soft-Bullets-The-Best-Toys-for-Children-as-the-Gift-Wonderful.jpg_640x640.jpg"/>
            </div>
           
        </div>
      </div>
    );
  }
}

export default App;
