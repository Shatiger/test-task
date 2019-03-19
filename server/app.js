const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const request = require('request');
const Smile = require('./model/smile');

const url = 'mongodb://localhost/smilesDb';
const smilesUrl = 'https://api.github.com/emojis';

var json;
//при запуске бэкенда удаляем все записи из бд, получаем смайлы с гитхаба, загружаем в бд
request({url: 'https://api.github.com/emojis', headers: { 'User-Agent': 'request' }, json: true}, (err, res, body) => {
    if (err) { return console.log(err); }
    json = body;
    Smile.remove({}, function(err){});
    Object.keys(json).forEach(function(key){
        Smile.insertMany([{name: key, link: json[key], removed: false, favorite: false}], function(error, docs){});
    });
});

app.use(bodyParser.json());

app.post('/api/smiles/getSmiles', (req, res) => {
    mongoose.connect(url, function(err){
        if(err) throw err;
        Smile.find({ removed: req.body.removed, favorite: req.body.favorite }, function(err, smiles){
            if(err) throw err;
            if(smiles.length > 0){
                return res.status(200).json({
                    status: 'success',
                    data: smiles
                })
            } else {
                return res.status(200).json({
                    status: 'empty',
                    message: 'There are no smiles'
                })
            }
             
        })
    });
});

app.post('/api/smiles/smileAction', (req, res) => {
    mongoose.connect(url, function(err){
        if(err) throw err;
        Smile.update({name: req.body.name}, {favorite: req.body.favorite, removed: req.body.removed}, {}, function(error, raw) {
            if (error) throw error;
            return res.status(200).json({
                status: 'success'
            });
        });
    });
});
 
app.listen(3000, () => console.log('smiles server running on port 3000!'))