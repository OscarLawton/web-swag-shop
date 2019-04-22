import React, {Component} from 'react';
import './product-condensed.css';
import { deepStrictEqual } from 'assert';
import DataService from "../Services/data-service";
let ds = new DataService();
class ProductCondensed extends Component {
    constructor(props){
        super(props);

        this.removeProduct = this.removeProduct.bind(this);
    }

    removeProduct = () => {
        ds.removeWishListItem(this.props.product);
    }
    render(){
        return (
   
             <li className="pc-condensed list-group-item ">
                <a className="btn btn-outline-danger" onClick={() => this.removeProduct()}>o</a>
                <p>{this.props.product.title} | <b>${this.props.product.price}</b></p>
            </li>
    
           
           
        )
    }
}

export default ProductCondensed;
