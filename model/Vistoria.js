const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Vistoria = new Schema({
    picture: {
        type: String
    },
    rua: {
        type: String
    },
    descricao: {
        type: String
    },
    numero_solicitacao: {
        type: String
    },
    data_abertura: {
        type: String
    },
    cep: {
        type: String
    },
    status: {
        type: String
    }

}, {
    collection: 'vistoria'
});

module.exports = mongoose.model('Vistoria', Vistoria);