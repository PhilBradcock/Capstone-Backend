const axios = require('axios');

async function fetchProductData(){
    // console.log("testing")
    const response = await axios.get("https://fakestoreapi.com/products",{headers:{"Accept-Encoding":"*"}})
    .then((json) => {
        // console.log(json.data)
        return(json.data)
    })
    return response
}

module.exports = {fetchProductData}

//this is the correct