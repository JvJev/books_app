const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book-routes');
const cors = require('cors');
const app = express();

app.use(express.json()); // tikrinu ar siunciami duomenys yra JSON formato
app.use(cors());
app.use('/books', router); // localhost:5000/books


mongoose
  .connect(
    'mongodb+srv://admin1:admin1@jevbaigiamasismongo.lhbp8q7.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => console.log('Connected To Database'))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
