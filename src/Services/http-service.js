import 'whatwg-fetch'


class HttpService{
    getProducts = () => {
        var promise = new Promise((resolve, reject) => {
            fetch('http://localhost:3004/product').then(response => {
                
                resolve(response.json());
                
                reject("something went wrong :o");
            });
        });
       return promise;
    }

   
}

export default HttpService;