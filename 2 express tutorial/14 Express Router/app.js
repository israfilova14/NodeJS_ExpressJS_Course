const express = require('express');
const app = express();

const people = require('./people');
const auth = require('./auth');

// static assests
app.use(express.static('./Methods-Public'));

// parse form data
app.use(express.urlencoded({extended: false}));
// Bu middleware, gələn application/x-www-form-urlencoded tipli (yəni adi HTML forması)
// POST istəklərinin body hissəsini oxuyur və onu req.body obyektinə çevirir.
app.use(express.json());

app.use('/api/people', people);
app.use('/login', people);

app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
})
