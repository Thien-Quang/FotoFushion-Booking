const Product = require('./account_services');
Product.getAllAccounts()
.then((data) =>{
    console.log(data)
})
