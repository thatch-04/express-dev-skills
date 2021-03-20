//import dependencies
const express = require('express');
const indexRouter = require('./routes/index');

//create app object
const app = express();


//set view enginer
app.set("view engine", "ejs");

//Mount Routes
app.use('/', indexRouter);



app.listen(3000, function () {
    console.log("Express is listening on port 3000");
  });