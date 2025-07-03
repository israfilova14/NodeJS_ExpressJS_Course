const express = require('express');
const app = express();
const {products} = require('./Data/data.js');

// app.get('/', (req, res) => {
//   res.json([{name: 'john'}, {name: 'susan'}]);
// })

// app.get('/', (req, res) => {
//   res.json(products);
// })

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})

app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const {id, name, image} = product;
    return {id, name, image};
  })
    res.json(newProducts);
})

app.get('/api/products/:productId', (req, res) => {
  //  console.log(req.params);
   const {productId} = req.params;

   const singleProduct = products.find((product) => product.id === Number(productId));
   if(!singleProduct){
     return res.status(404).send('Product Does Not Exit');
   }
  res.json(singleProduct);
})

app.get('/api/products/:productId/reviews/:reviewID', (req, res) => {
  console.log(req.params);
  res.send('Hello World!');
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000');
})