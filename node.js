const express = require('express')
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json());

app.use('/', require('./routes/index'));


module.exports = app;

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});