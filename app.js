const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const app = express();
const proviseurController = require('./controller/proviseurcontroller');

// Configuration de EJS comme moteur de template
app.set('view engine', 'ejs');

// Configuration du répertoire des vues
app.set('views', [
    path.join(__dirname, '/views'),
    path.join(__dirname, '/views/eleves/'),
    path.join(__dirname, '/views/proviseur/'),
    path.join(__dirname, '/views/secretariat/'),
    path.join(__dirname, '/views/enseignant/'),
    path.join(__dirname, '/views/default/')
]);

// Middleware pour analyser les corps des requêtes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Configuration des fichiers statiques
app.use('/css', express.static(__dirname + '/public/css'));

// Configuration des sessions
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));

// Configuration des routes
const connectRoute = require('./routes/connectRoute');
const decoRoute = require('./routes/decoRoute');
const eleveRoute = require('./routes/eleveroute');
const enseignantRoute = require('./routes/enseignantRoute');
const proviseurRoute = require('./routes/proviseurRoute');
const secretariatRoute = require('./routes/secretariatRoute');

// Route de base
app.get('/', (req, res) => {
    res.render('login');
});

app.use('/', connectRoute);
app.use('/', decoRoute);
app.use('/eleve', eleveRoute);
app.use('/enseignant', enseignantRoute);
app.use('/proviseur', proviseurRoute);
app.use('/secretariat', secretariatRoute);

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Le serveur écoute sur le port ${PORT}`);
});
