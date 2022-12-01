const express = require('express');
const app = express();
const abrigoRoutes = express.Router();

let Abrigo = require('../model/Abrigo');

// api to add abrigo
abrigoRoutes.route('/add').post(function (req, res) {
  let abrigo = new Abrigo(req.body);
  abrigo.save()
  .then(abrigo => {
    res.status(200).json({'status': 'success','mssg': 'abrigo added successfully'});
  })
  .catch(err => {
    res.status(409).send({'status': 'failure','mssg': 'unable to save to database'});
  });
});

// api to get abrigos
abrigoRoutes.route('/').get(function (req, res) {
  Abrigo.find(function (err, abrigos){
    if(err){
      res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','abrigos': abrigos});
    }
  });
});

// api to get abrigo
abrigoRoutes.route('/abrigo/:id').get(function (req, res) {
  let id = req.params.id;
  Abrigo.findById(id, function (err, abrigo){
    if(err){
      res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','abrigo': abrigo});
    }
  });
});

// api to update route
abrigoRoutes.route('/update/:id').put(function (req, res) {
    Abrigo.findById(req.params.id, function(err, abrigo) {
    if (!abrigo){
      res.status(400).send({'status': 'failure','mssg': 'Unable to find data'});
    } else {
        abrigo.name = req.body.name;
        abrigo.picture = req.body.picture;
        abrigo.endereco = req.body.endereco;
        abrigo.id = req.body.id;

        abrigo.save().then(business => {
          res.status(200).json({'status': 'success','mssg': 'Update complete'});
      })
    }
  });
});

// api for delete
abrigoRoutes.route('/delete/:id').delete(function (req, res) {
  Abrigo.findByIdAndRemove({_id: req.params.id}, function(err,){
    if(err){
      res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','mssg': 'Delete successfully'});
    }
  });
});

module.exports = abrigoRoutes;