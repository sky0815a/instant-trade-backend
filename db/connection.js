const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = 'mongodb+srv://sky0815a:01172737Aa@cluster0.ptwvtbg.mongodb.net/?retryWrites=true&w=majority'
  // process.env.NODE_ENV === `production`
  // ? process.env.DATABASE_URL
  // :`mongodb://localhost/trackapp`;

mongoose
  .connect(mongoURI)
  .then((instance) =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  .catch((error) => console.log('Connection failed!', error));

module.exports = mongoose;