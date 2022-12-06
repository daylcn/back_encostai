const express = require('express');
const app = express();
const emergenciaRoutes = express.Router();

let Emergencia = require('../model/Emergencia');

// api to add emergencia
emergenciaRoutes.route('/add').post(function (req, res) {
    let emergencia = new Emergencia(req.body);
    emergencia.save()
        .then(emergencia => {
            res.status(200).json({ 'status': 'success', 'mssg': 'emergencia added successfully' });
        })
        .catch(err => {
            res.status(409).send({ 'status': 'failure', 'mssg': 'unable to save to database' });
        });
});

// api to get emergencias
emergenciaRoutes.route('/').get(function (req, res) {
    Emergencia.find(function (err, emergencias) {
        if (err) {
            res.status(400).send({ 'status': 'failure', 'mssg': 'Something went wrong' });
        }
        else {
            res.status(200).json({ 'status': 'success', 'emergencias': emergencias });
        }
    });
});

// api to get emergencia
emergenciaRoutes.route('/emergencia/:id').get(function (req, res) {
    let id = req.params.id;
    Emergencia.findById(id, function (err, emergencia) {
        if (err) {
            res.status(400).send({ 'status': 'failure', 'mssg': 'Something went wrong' });
        }
        else {
            res.status(200).json({ 'status': 'success', 'emergencia': emergencia });
        }
    });
});

// api to update route
emergenciaRoutes.route('/update/:id').put(function (req, res) {
    Emergencia.findById(req.params.id, function (err, emergencia) {
        if (!emergencia) {
            res.status(400).send({ 'status': 'failure', 'mssg': 'Unable to find data' });
        } else {
            emergencia.nome = req.body.nome;
            emergencia.numero = req.body.numero;
            emergencia.id = req.body.id;

            emergencia.save().then(business => {
                res.status(200).json({ 'status': 'success', 'mssg': 'Update complete' });
            })
        }
    });
});

// api for delete
emergenciaRoutes.route('/delete/:id').delete(function (req, res) {
    Emergencia.findByIdAndRemove({ _id: req.params.id }, function (err,) {
        if (err) {
            res.status(400).send({ 'status': 'failure', 'mssg': 'Something went wrong' });
        }
        else {
            res.status(200).json({ 'status': 'success', 'mssg': 'Delete successfully' });
        }
    });
});

module.exports = emergenciaRoutes;