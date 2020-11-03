const mongoose = require('mongoose');
require('dotenv').config();

const URI = `${process.env.MONGODB_SRV}${process.env.MONGODB_ATHOR}${process.env.MONGODB_ATLAS}`

async function connect() {
  await mongoose
    .connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(URI))
    .catch((err) => console.log(err));
}

module.exports = { connect };