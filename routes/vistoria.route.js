const express = require('express');
const app = express();
const vistoriaRoutes = express.Router();

let Vistoria = require('../model/Vistoria');

// api to add vistoria
vistoriaRoutes.route('/add').post(function (req, res) {
    let vistoria = new Vistoria(req.body);
    vistoria.save()
        .then(vistoria => {
            res.status(200).json({ 'status': 'success', 'mssg': 'vistoria added successfully' });
        })
        .catch(err => {
            res.status(409).send({ 'status': 'failure', 'mssg': 'unable to save to database' });
        });
});

// api to get vistorias
vistoriaRoutes.route('/').get(function (req, res) {
    Vistoria.find(function (err, vistorias) {
        if (err) {
            res.status(400).send({ 'status': 'failure', 'mssg': 'Something went wrong' });
        }
        else {
            res.status(200).json({ 'status': 'success', 'vistorias': vistorias });
        }
    });
});

// api to get vistoria
vistoriaRoutes.route('/vistoria/:id').get(function (req, res) {
    let id = req.params.id;
    Vistoria.findById(id, function (err, vistoria) {
        if (err) {
            res.status(400).send({ 'status': 'failure', 'mssg': 'Something went wrong' });
        }
        else {
            res.status(200).json({ 'status': 'success', 'vistoria': vistoria });
        }
    });
});

// api to update route
vistoriaRoutes.route('/update/:id').put(function (req, res) {
    Vistoria.findById(req.params.id, function (err, vistoria) {
        if (!vistoria) {
            res.status(400).send({ 'status': 'failure', 'mssg': 'Unable to find data' });
        } else {
            vistoria.picture = req.body.picture;
            vistoria.rua = req.body.rua;
            vistoria.descricao = req.body.descricao;
            vistoria.numero_solicitacao = req.body.numero_solicitacao;
            vistoria.data_abertura = req.body.data_abertura;
            vistoria.cep= req.body.cep;
            vistoria.status = req.body.status;


            vistoria.save().then(business => {
                res.status(200).json({ 'status': 'success', 'mssg': 'Update complete' });
            })
        }
    });
});

// api for delete
vistoriaRoutes.route('/delete/:id').delete(function (req, res) {
    Vistoria.findByIdAndRemove({ _id: req.params.id }, function (err,) {
        if (err) {
            res.status(400).send({ 'status': 'failure', 'mssg': 'Something went wrong' });
        }
        else {
            res.status(200).json({ 'status': 'success', 'mssg': 'Delete successfully' });
        }
    });
});

module.exports = vistoriaRoutes;