const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Emergencia = new Schema({
    name: {
        type: String
    },
    number: {
        type: String
    },
    id: {
        type: String
    }
}, {
    collection: 'emergencia'
});

module.exports = mongoose.model('Emergencia', Emergencia);