import 'whatwg-fetch'
import { resolve } from 'dns';

class HttpService{
    getProducts = () => {
        var promise = new Promise((resolve, reject) => {

        });
        fetch('http://localhost:3004/product').then(response => {
            console.log(response.json());
        });
    }

   
}

export default HttpService;