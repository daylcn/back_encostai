const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Abrigo = new Schema({
  name: {
    type: String
  },
  picture: {
    type: String
  },
  endereco: {
    type: Number
  },
  id: {
    type: String
  }
},{
    collection: 'abrigo'
});

module.exports = mongoose.model('Abrigo', Abrigo);