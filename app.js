var express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mean', { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)});


const abrigoRoutes = require('./routes/abrigo.route');
const emergenciaRoutes = require('./routes/emergencia.route');
const userRoutes = require('./routes/user.route');
const vistoriaRoutes = require('./routes/vistoria.route');
const vistoria = require('./routes/vistoria.route');


var app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/user', userRoutes);
app.use('/abrigo', abrigoRoutes);
app.use('/emergencia', emergenciaRoutes);
app.use('/vistoria',vistoriaRoutes);



app.get('/', function(req, res){
   res.send("Hello World!");
});

app.listen(3000,function(){
    console.log('Listening on port 3000!');
});