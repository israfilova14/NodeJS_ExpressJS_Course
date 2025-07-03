// ! HTTP Methods

/*
GET - Read Data
POST - Insert Data
PUT - Update Data
DELETE - Delete Data

GET  www.store.com/api/orders get - all orders
POST www.store.com/api/orders - place an order(send data)
GET  www.store.com/api/orders/:id - get single order(path params)
PUT  www.store.com/api/orders/:id - update specific order(params + send data)
DELETE www.store.com/api/orders/:id - delete order(path params)
*/

const express = require('express');
const app = express();
let {people} = require('./Data/data.js');

// static assests
app.use(express.static('./Methods-Public'));

// parse form data
app.use(express.urlencoded({extended: false}));
// Bu middleware, gələn application/x-www-form-urlencoded tipli (yəni adi HTML forması)
// POST istəklərinin body hissəsini oxuyur və onu req.body obyektinə çevirir.
app.use(express.json())
 
// ! --- GET

app.get('/api/people', (req, res) => {
  res.status(200).json({success: true, data: people})
})

// ! --- POST

app.post('/login', (req, res) => {
   console.log(req.body);
   const {name} = req.body;
   if(name){
     return res.status(200).send(`Welcome ${name}`);
   }
   res.status(401).send('Please Provide Credentials');
  //  res.send('POST');
})

app.post('/api/people', (req, res) => {
  const {name} = req.body;
  if(!name){
    return res.status(400).json({success: false, msg: "please provide name value"});
  }
  res.status(201).send({success: true, person: name});
})

app.post('/api/people/postman', (req, res) => {
  const {name} = req.body;
  if(!name){
    return res
            .status(400)
            .json({success: false, msg: 'please provide name value'});
  }
  res.status(201).send({success: true, data: [...people, name]});
})

// ! --- PUT

app.put('/api/people/:id', (req, res) => {
  const {id} = req.params;
  const {name} = req.body;
  console.log(id, name);
  
  const person = people.find((person) => person.id === Number(id));

  if(!person){
    return res.status(404).json({success: true, msg: `no person with id ${id}`});
  }

  const newPeople = people.map((person) => {
    if(person.id === Number(id)){
      person.name = name;
    }
    return person;
  })
  res.status(200).json({success: true, data: newPeople});
})

// ! --- DELETE

app.delete('/api/people/:id', (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));

  if(!person){
    return res
      .status(404)
      .json({success: false, msg: `no person with id ${req.params.id}`});
  }

  const newPeople = people
                      .filter((person) => person.id !== Number(req.params.id));
  return res.status(200).json({success: true, data: newPeople});
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
})
