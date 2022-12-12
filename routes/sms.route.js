const express = require('express');
const app = express();
const smsRoutes = express.Router();

let Sms = require('../model/SMS');

// api to add sms
smsRoutes.route('/add').post(function (req, res) {
  let sms = new Sms(req.body);
  sms.save()
  .then(sms => {
    res.status(200).json({'status': 'success','mssg': 'user added successfully'});
  })
  .catch(err => {
    res.status(409).send({'status': 'failure','mssg': 'unable to save to database'});
  });
});

// api to get sms
smsRoutes.route('/').get(function (req, res) {
  Sms.find(function (err, sms){
    if(err){
      res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','sms': sms});
    }
  });
});

module.exports = smsRoutes;