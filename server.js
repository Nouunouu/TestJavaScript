var express = require('express');
var app = express();
var http = require('http');

var server = http.createServer(app);
var mongoose = require('mongoose');

app.use(express.json());  // Middleware pour analyser les corps des requêtes en JSON

var usersRouter = require('./controllers/HotelController');  // Chemin vers le fichier des routes
app.use('/test', usersRouter)  ;// Utiliser le routeur pour toutes les routes sous "/users"



server.listen(3011, () => {
    console.log('Server is running on port 3011');
});

mongoose.connect('mongodb://127.0.0.1:27017/js-bdnourtest')
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((error) => {
        console.error("Database connection error:", error.message);
    });
