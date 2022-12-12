const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Sms = new Schema({
  numero: {
    type: Number
  },
  endereco: {
    type: String
  },
  bairro: {
    type: String
  },
  id_usuario: {
    type: String
  }
},{
    collection: 'sms'
});

module.exports = mongoose.model('SMS', Sms);