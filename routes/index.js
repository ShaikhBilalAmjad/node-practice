/**
 * This module connects rendering modules to routes
 */

const express = require('express')
const app = express();

app.use('/users', require('./users'));

module.exports = app