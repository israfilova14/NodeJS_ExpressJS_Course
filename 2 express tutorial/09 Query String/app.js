const express = require('express');
const app = express();
const {products} = require('./Data/data.js');

app.get('/api/v1/query', (req, res) => {
  // console.log(req.query);
  const {search, limit} = req.query;
  let sortedProducts = [...products];

  if(search){
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    })
  }

  if(limit){
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if(sortedProducts.length < 1){
    // res.status(200).send('No products matched your search')
    return res.status(200).json({sucess: true, data: []})
  }

  res.status(200).json(sortedProducts);
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000');
})