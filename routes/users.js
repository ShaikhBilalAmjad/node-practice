const userArray = require('../Json/user');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json(userArray)
});
app.get('/:id', (req, res) => {
    for(var user of userArray) {
    if(user.id == req.params.id){
            res.json(user);
        }
    }
});
app.post('/add/:id', (req, res) => {
  res.send('Hello Bilal! you are in add')
});
app.put('/put', (req, res) => {
  res.send('Hello Bilal! you are in put')
});
app.delete('/delete', (req, res) => {
  res.send('Hello Bilal! you are in delete')
});

module.exports = app