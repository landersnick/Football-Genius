var express = require('express');
var path = require('path');

//var applicationRouter = require('./routes/application');
var publicRouter = require('./routes/public');

var app = express();

//app.use('/application/', applicationRouter);
app.use('/', publicRouter);
app.use(express.static('public'));


const PORT = process.env.PORT || 3050
app.listen(PORT, () => console.info(`Server has started on ${PORT}`))


module.exports = app;