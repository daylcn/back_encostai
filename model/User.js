const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phone_number: {
    type: Number
  },
  cpf: {
    type: String
  },
  senha:{
    type: String
  }
},{
    collection: 'user'
});

module.exports = mongoose.model('User', User);