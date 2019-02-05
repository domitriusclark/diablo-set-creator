const express = require('express');
const data = require('./characters.json');


app.use((req, res, next) => {
    res.header("Accesss-Control-Allow-Origin", "*");
    res.header("Acess-Control-Allow-Heders", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/characters", (req, res, next) => {
    res.send(data);
});

app.liste(5000, () => console.log("Serving data!"));