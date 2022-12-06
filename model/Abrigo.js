const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Abrigo = new Schema({
  nome: {
    type: String
  },
  imagem: {
    type: String
  },
  endereco: {
    type: Number
  },
  id: {
    type: String
  },
  detalhe:{
    type: String
  }
},{
    collection: 'abrigo'
});

module.exports = mongoose.model('Abrigo', Abrigo);