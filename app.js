const express = require('express');
const configureRoutes = require('./routes');
const app = express();
app.use(express.json());

//global list of Bills 
Med_Bill_list = [];

configureRoutes(app);

app.listen(3000, ()=>{
    console.log("Welcome");
    console.log("http://localhost:3000 is running");
});
